export class Utils {

  public static priceToUSDString(price: number): string {
    return '$' + price.toFixed(2);
  }

}