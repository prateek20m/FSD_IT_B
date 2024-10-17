const map=new Map([
    ["key1","js"],
    [123,"java"],
    [234,456],
    ["lang1","GO"]
]);
console.log(map.get(123));
console.log(map.get("key1"));
map.set("key2","typescript");
console.log(map);