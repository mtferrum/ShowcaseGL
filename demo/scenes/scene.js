{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "",
	"generatedBy"   : "Blender 2.65 Exporter",
	"objects"       : 3,
	"geometries"    : 1,
	"materials"     : 1,
	"textures"      : 0
},

"urlBaseType" : "relativeToScene",


"objects" :
{
	"Cube" : {
		"geometry"  : "geo_Cube.001",
		"groups"    : [  ],
		"material"  : "Material",
		"position"  : [ 0, 0, 0 ],
		"rotation"  : [ -1.5708, 0, 0 ],
		"quaternion": [ -0.707107, 0, 0, 0.707107 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Lamp" : {
		"type"       : "PointLight",
		"position"   : [ 4.07625, 5.90386, 1.00545 ],
		"rotation"   : [ 0.650328, 1.86639, 0.0552171 ],
		"color"      : 16777215,
		"distance"   : 30.000,
		"intensity"  : 1.000
	},

	"default_camera" : {
		"type"  : "PerspectiveCamera",
		"fov"   : 49.159264,
		"aspect": 1.333000,
		"near"  : 0.100000,
		"far"   : 100.000000,
		"position": [ 7.48113, 5.34367, 6.50764 ],
		"target"  : [ 0, 0, 0 ]
	}
},


"geometries" :
{

},


"materials" :
{
	"Material" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10724259, "ambient": 10724259, "opacity": 1, "blending": "NormalBlending" }
	}
},


"embeds" :
{
"emb_Cube.001": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "Material",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorDiffuse" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorSpecular" : [0.5, 0.5, 0.5],
		"depthTest" : true,
		"depthWrite" : true,
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,0.999999,1,0.999999,-1,1,-1,-1,1,-1,1,1],

	"morphTargets" : [],

	"normals" : [0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349],

	"colors" : [],

	"uvs" : [],

	"faces" : [35,0,1,2,3,0,0,1,2,3,35,4,7,6,5,0,4,5,6,7,35,0,4,5,1,0,0,4,7,1,35,1,5,6,2,0,1,7,6,2,35,2,6,7,3,0,2,6,5,3,35,4,0,3,7,0,4,0,3,5],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animations" : []
}
},


"transform" :
{
	"position"  : [ 0, 0, 0 ],
	"rotation"  : [ 0, 0, 0 ],
	"scale"     : [ 1, 1, 1 ]
},

"defaults" :
{
	"bgcolor" : [ 0, 0, 0 ],
	"bgalpha" : 1.000000,
	"camera"  : "default_camera"
}

}
