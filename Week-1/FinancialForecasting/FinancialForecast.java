public class FinancialForecast {

    public static double forecast(double amount, double growthRate, int years) {

        if (years == 0) {
            return amount;
        }

        return forecast(amount, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 5;

        double futureValue = forecast(currentValue, growthRate, years);

        System.out.printf("Future Value after %d years = %.2f",
                years, futureValue);
    }
}