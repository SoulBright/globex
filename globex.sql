WITH CTE AS (
  SELECT 
    c.id,
    c.name,
    s.name AS sub_name,
    s.id AS sub_id,
    s.parent_id,
    0 AS sub_level,
    COUNT(*) OVER (PARTITION BY s.id) AS colls_count,
    c.age -- Добавлено присоединение столбца "age"
  FROM collaborators c
  INNER JOIN subdivisions s ON c.subdivision_id = s.id
  WHERE c.name = 'Сотрудник 1' -- Фильтр по сотруднику "Сотрудник 1"
  
  UNION ALL
  
  SELECT 
    c.id,
    c.name,
    s.name AS sub_name,
    s.id AS sub_id,
    s.parent_id,
    CTE.sub_level + 1,
    COUNT(*) OVER (PARTITION BY s.id) AS colls_count,
    c.age -- Добавлено присоединение столбца "age"
  FROM CTE
  INNER JOIN subdivisions s ON CTE.sub_id = s.parent_id
  INNER JOIN collaborators c ON c.subdivision_id = s.id
)
SELECT 
  id,
  name,
  sub_name,
  sub_id,
  sub_level,
  colls_count
FROM CTE
WHERE age < 40 -- Фильтр по возрасту
  AND LEN(name) > 11 -- Фильтр по длине имени
  AND sub_id NOT IN (100055, 100059) -- Исключение подразделений по id
ORDER BY sub_level ASC

-- Время выполнения: 2023-10-28T13:00:42.8845180+03:00