import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ValidationPipe, ValidationError } from "@nestjs/common";
import { I18nService } from "nestjs-i18n";

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  constructor(private readonly i18n: I18nService) {
    super({
      transform: true,
      whitelist: false,
      forbidUnknownValues: false,
      exceptionFactory: (errors: ValidationError[]) => this.formatErrors(errors),
    });
  }

  private formatErrors(errors: ValidationError[]) {
    const formatted: Record<string, string> = {};

    errors.forEach((err) => {
      const constraints = err.constraints ?? {};
      const [key, rawMessage] = Object.entries(constraints)[0]; // lỗi đầu tiên

      const [msgKey, msgArgs] = rawMessage.split("|");

      let args = {};
      try {
        args = msgArgs ? JSON.parse(msgArgs) : {};
      } catch {}

      // dịch message lỗi
      const translatedMsg = this.i18n.translate(msgKey, { args });

      // dịch tên field
      const translatedField = this.i18n.translate(`field.${err.property}`, {
        defaultValue: err.property,
      });

      // gán vào object
      formatted[err.property] = `${translatedField}${translatedMsg}`.trim();
    });

    return new HttpException(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        errors: formatted,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
