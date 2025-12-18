### SELECT / ORDER BY

SELECT price,con_year
FROM vila_list
ORDER BY price desc
LIMIT 100

### GROUP BY / COUNT
SELECT dong, count(*)
FROM apt_list
GROUP BY dong


- [x] WHERE / AND / OR
SELECT *
FROM apt_list
WHERE dong = ‘삼성동’
OR day = 1
LIMIT 100

- [x] Case when / else
SELECT price, year, month, day, nm
		,case when price <= 10000 them  ‘1억 이하’
			when price <= 30000 them  ‘1억 ~3억 이하’
			ELSE ‘3억초과’
		end
FROM apt_list
LIMIT 100


- [x] LIKE / Not like
SELECT *
FROM apt_list
WHERE nm LIKE  = ‘%자이%’
LIMIT 100

- [x] 서브쿼리
SELECT *
FROM (
	SELECT dong, count(*) cnt
	FROM apt_list		
	GROUP BY dong		
) a
WHERE CNT > 100


- [x] JOIN
SELECT a.dong
		,a.nm
		,a.size
		,a.price
		,a.gu
		,a.dong
FROM apt_list a, area_cd b
WHERE a.area_cd= b.area_cd
LIMIT 5


- [x] Sum / Min / Max / AVG
SELECT dong
		,SUM(price)
		,MIN(price)
		,MAX(price)
		,AVG(price)
FROM apt_list
GROUP BY dong