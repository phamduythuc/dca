import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyUsd'
})
export class CurrencyUsdPipe implements PipeTransform {

  transform(value: number, symbol: string = '$'): string {
    if (value == null) return ''; // Kiểm tra giá trị null hoặc undefined

    // Định dạng giá trị thành chuỗi tiền tệ
    const formattedValue = value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0, // Số chữ số sau dấu phẩy
    });

    return symbol + formattedValue.replace('$', ''); // Thay thế ký hiệu $ mặc định nếu có
  }

}
