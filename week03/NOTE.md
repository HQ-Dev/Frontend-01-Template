# 每周总结可以写在这里
## JS中内置17个对象，常用的是Array对象、Date对象、正则表达式对象、string对象、Global对象 

### Array对象中常用方法： 
Concat（）：表示把几个数组合并成一个数组。 
Join（）：返回字符串值，其中包含了连接到一起的数组的所有元素，元素由指定的分隔符分隔开来。 
Pop（）：移除数组最后一个元素。 
Shift（）：移除数组中第一个元素。 
Slice（start，end）：返回数组中的一段。 
Push（）：往数组中新添加一个元素，返回最新长度。 
Sort（）：对数组进行排序。 
Reverse（）：反转数组的排序。 
toLocaleString();返回当前系统时间 
Array对象属性常用的只有一个： 
Length：表示取得当前数组长度 

### Global对象 
是一个固有对象，目的是把所有的全局方法集中在一个对象中。 
Global没有语法，直接调用其方法。 
escape（）: 对 String 对象编码以便它们能在所有计算机上可读. 
escape(charString) 
必选项 charstring 参数是要编码的任意 String 对象或文字。 
isNaN():判断一个值是否是NaN。 
parseInt（）：返回由字符串得到的整数 
 
### String对象 
charAt():返回指定索引的位置的字符 
concat（）：返回字符串值，表示两个或多个字符串的连接 
match（）：使用正则表达式模式对字符串执行查找，并将包含查找结果最为结果返回 
Replace（a，b）：字符b替换a 
Search（stringObject）：指明是否存在相应的匹配。如果找到一个匹配，search 方法将返回一个整数值，指明这个匹配距离字符串开始的偏移位置。如果没有找到匹配，则返回 -1。 
Slice（start，end）：返回字符段片段 
Split（）：字符串拆分 
Substr（start，length）：字符串截取 
Substring（start，end）取得指定长度内的字符串 
toUpperCase（）：返回一个字符串，该字符串中的所有字母都被转化为大写字母。 
toLowerCase（）：返回一个字符串，该字符串中的所有字母都被转化为小写字母。

### Math对象
ceil()：向上取整。
floor():向下取整。
round():四舍五入。
random():取随机数。
 

### Date对象
get/setDate()：返回或设置日期。
get/setFullYear():返回或设置年份，用四位数表示。
get/setYear():返回或设置年份。
get/setMonth():返回或设置月份。0为一月
get/setHours():返回或设置小时，24小时制
get/setMinutes():返回或设置分钟数。
get/setSeconds():返回或设置秒钟数。
get/setTime():返回或设置时间（毫秒为单位）