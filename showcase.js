/**
 * Created by MT on 11.01.14.
 */
ShowcaseGL = {}
ShowcaseGL.util = {}
ShowcaseGL.util.$get_json = function(URL,callback){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', URL, true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200) {
                this.json = JSON.parse(xmlhttp.responseText);
                callback(this.json);
            }
        }
    };
    xmlhttp.send(null);
}

ShowcaseGL.util.createLoadScene = function() {

    var result = {

        scene:  new THREE.Scene(),
        camera: new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 1000 )

    };

    result.camera.position.z = 100;
    result.scene.add( result.camera );

    var object, geometry, material, light, count = 500, range = 200;

    material = new THREE.MeshLambertMaterial( { color:0xffffff } );
    geometry = new THREE.CubeGeometry( 5, 5, 5 );

    for( var i = 0; i < count; i++ ) {

        object = new THREE.Mesh( geometry, material );

        object.position.x = ( Math.random() - 0.5 ) * range;
        object.position.y = ( Math.random() - 0.5 ) * range;
        object.position.z = ( Math.random() - 0.5 ) * range;

        object.rotation.x = Math.random() * 6;
        object.rotation.y = Math.random() * 6;
        object.rotation.z = Math.random() * 6;

        object.matrixAutoUpdate = false;
        object.updateMatrix();

        result.scene.add( object );

    }

    result.scene.matrixAutoUpdate = false;

    light = new THREE.PointLight( 0xffffff );
    result.scene.add( light );

    light = new THREE.DirectionalLight( 0x111111 );
    light.position.x = 1;
    result.scene.add( light );

    return result;

}

