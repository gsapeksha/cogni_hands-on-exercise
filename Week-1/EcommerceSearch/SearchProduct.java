class Product {

    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}

public class SearchProduct {

    public static Product linearSearch(Product[] products, String key) {

        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(key)) {
                return p;
            }
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion")
        };

        Product result = linearSearch(products, "Phone");

        if (result != null) {
            System.out.println("Product Found");
            System.out.println("ID: " + result.productId);
            System.out.println("Name: " + result.productName);
            System.out.println("Category: " + result.category);
        } else {
            System.out.println("Product Not Found");
        }
    }
}