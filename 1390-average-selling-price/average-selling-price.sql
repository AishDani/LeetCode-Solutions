# Write your MySQL query statement below
SELECT p.product_id, IFNULL(ROUND(SUM(p.price * U.units)/ SUM(U.units), 2),0) AS average_price
FROM Prices as p
LEFT JOIN UnitsSold as U
ON p.product_id = U.product_id
 AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY
    p.product_id;