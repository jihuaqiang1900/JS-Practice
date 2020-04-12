# HTTP缓存知识整理


* ## 和缓存有关的HTTP头部字段

 1. ### 通用首部字段

 |名称|含义|
 |---|---|
 |Cache-control|控制缓存的行为|
 |Pragma|http1.0时期遗留的产物，值为'no-cache'时禁用缓存|


 2. ### 请求首部字段

 |名称|含义|
 |---|---|
 |If-Match|比较E-Tag是否一致|
 |If-None-Match|比较E-Tag是否不一致|
 |If-Modified-Since|比较资源最后更新的时间是否一致|
 |If-Unmodified-Since|比较资源最后更新的时间是否不一致|

3. ### 响应首部字段
 |名称|含义|
 |---|---|
 |ETag|资源的指纹或其他匹配信息|

 4. ### 实体首部字段

 |名称|含义|
 |---|---|
 |Expires|Http1.0遗留的产物，实体主体过期的时间|
 |Last-modified|资源最后一次修改的时间|

 ## HTTP1.0时代的缓存方式

 