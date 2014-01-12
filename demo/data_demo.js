{
    "scene":{
        "desc":"Scene",
        "url": "demo/scenes/scene.js",
        "max_distanse":20.0,
        "min_distanse":0.01,
        "rotation_speed":1.0
    },
    "objs":{
        "cube":{
            "desc":"Cube",
            "url": "demo/obj/cube/model.obj",
            "default_mtl": "green_cube",
            "mtls":["green_cube","purple_cube"]
        },
        "conus":{
            "desc":"Conus",
            "url": "demo/obj/conus/model.obj",
            "default_mtl": "conus_mat",
            "mtls":["conus_mat","conus_glc"]
        },
        "monkey":{
            "desc":"Monkey",
            "url": "demo/obj/monkey/model.obj",
            "default_mtl": "monkey_golden",
            "mtls":["monkey_golden","monkey_ice"]
        }
    },
    "mtls":{
        "green_cube":{
            "desc":"Green",
            "url":"demo/obj/cube/green.mtl"
        },
    "purple_cube":{
        "desc":"Purple",
            "url":"demo/obj/cube/purple.mtl"
    	},
    "conus_mat":{
        "desc":"Mat",
            "url":"demo/obj/conus/mat.mtl"
    	},
    "conus_glc":{
        "desc":"Glc",
            "url":"demo/obj/conus/glc.mtl"
    	},
    "monkey_golden":{
        "desc":"Golden",
            "url":"demo/obj/monkey/golden.mtl"
    	},
    "monkey_ice":{
        "desc":"Ice",
            "url":"demo/obj/monkey/ice.mtl"
    	}

    },
    "order": ["cube","conus","monkey"]


}