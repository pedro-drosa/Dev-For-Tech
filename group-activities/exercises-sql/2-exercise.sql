CREATE DATABASE ecommerce_devfortech,

USE ecommerce_devfortech,

CREATE TABLE products(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  description TEXT NOT NULL ,
  price DECIMAL(15,2) NOT NULL,
  departament VARCHAR(50),
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
),

INSERT INTO products VALUES
(null, 'Moexipril Hydrochloride', 'Malignant neoplasm of upper-outer quadrant of left male breast', 152.26, 'Books', DEFAULT),
(null, 'Lysol I.C.', 'Unspecified open wound of right front wall of thorax without penetration into thoracic cavity, initial encounter', 656.14, 'Toys', DEFAULT),
(null, 'Ropivacaine Hydrochloride', 'Fracture of unspecified part of scapula, unspecified shoulder, sequela', 282.12, 'Sports', DEFAULT),
(null, 'Oxygen', 'Congenital entropion', 866.68, 'Shoes', DEFAULT),
(null, 'GUNA-DIZZY', '2-part displaced fracture of surgical neck of left humerus, sequela', 136.01, 'Grocery', DEFAULT),
(null, 'Acid Reducer', 'Other specified injury of ulnar artery at wrist and hand level of left arm, sequela', 30.3, 'Automotive', DEFAULT),
(null, 'Tiger Balm White', 'Puncture wound without foreign body of right upper arm, subsequent encounter', 552.04, 'Music', DEFAULT),
(null, 'Risperidone', 'Person on outside of special construction vehicle injured in traffic accident, subsequent encounter', 4.52, 'Electronics', DEFAULT),
(null, 'Everyday Sunscreen Broad Spectrum SPF 30', 'Encounter for orthopedic aftercare following scoliosis surgery', 62.72, 'Industrial', DEFAULT),
(null, 'ShopRite Allergy D 12', 'Radiodermatitis, unspecified', 89.53, 'Music', DEFAULT);

SELECT * FROM products WHERE price > 500;
SELECT * FROM products WHERE price < 500;

UPDATE products SET name = 'Furosemide' WHERE id = 9;
UPDATE products SET description = 'Derangement of other lateral' WHERE id = 9;