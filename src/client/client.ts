import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import Stats from 'three/examples/jsm/libs/stats.module'
import {TGALoader} from "three/examples/jsm/loaders/TGALoader";

const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(500))

const light = new THREE.PointLight()
light.position.set(80, 140, 100)
scene.add(light)

const ambientLight = new THREE.AmbientLight()
scene.add(ambientLight)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.set(100, 140, 100)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.target.set(0, 1, 0)


const loader = new TGALoader();

// load a resource
const texture = loader.load(
    // resource URL
    'material/colon.tga',
    // called when loading is completed
    function ( texture ) {
        console.log( 'Texture is loaded' );
    },
    // called when the loading is in progresses
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    // called when the loading fails
    function ( error ) {

        console.log( 'An error happened' );

    }
);

const material = new THREE.MeshPhongMaterial( {
    color: 0xffffff,
    map: texture
} );

// const material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00,
//     wireframe: true,
// })

const fbxLoader = new FBXLoader()
fbxLoader.load(
    'models/BallMagnet.fbx',
    (object) => {
        object.traverse(function (child) {
            if ((child as THREE.Mesh).isMesh) {

                (child as THREE.Mesh).material = material
                // if ((child as THREE.Mesh).material) {
                //     ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).transparent = false
                // }
            }
        })
        // const material = new THREE.MeshBasicMaterial() //{ color: 0x00ff00, wireframe: true })
        // const cube = new THREE.Mesh(object, material)
        scene.add(object)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

const stats = Stats()
document.body.appendChild(stats.dom)

function animate() {
    requestAnimationFrame(animate)

    controls.update()

    render()

    stats.update()
}

function render() {
    renderer.render(scene, camera)
}

animate()