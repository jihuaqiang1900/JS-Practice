# HTTP缓存知识整理


* ## 和缓存有关的HTTP头部字段

 1. 通用首部字段

 |名称|含义|
 |---|---|
 |Cache-control|控制缓存的行为|
 |Pragma|http1.0时期遗留的产物，值为'no-cache'时禁用缓存|


 2. 请求首部字段

 |名称|含义|
 |---|---|
 |If-Match|比较E-Tag是否一致|
 |If-None-Match|比较E-Tag是否不一致|
 |If-Modified-Since|比较资源最后更新的时间是否一致|
 |If-Unmodified-Since|比较资源最后更新的时间是否不一致|
