# 28. Find the Index of the First Occurrence in a String
##### Easy

Given two strings <b>needle</b> and <b>haystack</b>, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

#### Example 1:

<b>Input:</b> haystack = "sadbutsad", needle = "sad"

<b>Output:</b> 0

<b>Explanation:</b> "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.


#### Example 2:

<b>Input:</b> haystack = "leetcode", needle = "leeto"

<b>Output:</b> -1

<b>Explanation:</b> "leeto" did not occur in "leetcode", so we return -1.
 

#### Constraints:
* 1 <= haystack.length, needle.length <= 104
* haystack and needle consist of only lowercase English characters.