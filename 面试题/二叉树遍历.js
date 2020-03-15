var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

         // 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
         function getListWithDLR(obj) {
            console.log(obj.id);
            if(obj.left){
                getListWithDLR(obj.left);
            }
            if(obj.right){
                getListWithDLR(obj.right);
            }
        }
        console.log("前序遍历：");
        getListWithDLR(tree);

        // 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
        function getListWithLDR(obj) {
                if(obj.left){
                    getListWithLDR(obj.left);
                }
                console.log(obj.id);
                if(obj.right){
                    getListWithLDR(obj.right);
                }         
        }
        console.log("中序遍历：");
        getListWithLDR(tree);

        // 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
        function getListWithLRD(obj) {
                if(obj.left){
                    getListWithLRD(obj.left);
                }
                if(obj.right){
                    getListWithLRD(obj.right);
                } 
                console.log(obj.id);
        }
        console.log("后序遍历：");
getListWithLRD(tree)