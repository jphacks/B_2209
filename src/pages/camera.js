// 今は使ってなくてmyfile.htmlに移動
import { Header } from '../components/Header';
import HEAD from 'next/head';
import Script from 'next/script';
const CameraPage = () => {
  async function get_ar() {
    try {
      const id = 1; //今はidが1の人のデータを取得するようにコードを書いています。ここの数字を変えてください。
      const result = await fetch(`/api/get/${id}`, {
        method: 'GET',
      });
      const data = await result.json();
      console.log(data); //dataの中身を見てください(ブラウザのdeveloperのconsoleに表示)
    } catch (error) {
      console.error(error);
    }
  }
  get_ar();
  return (
    <>
      <HEAD>
        <Script type="text/javascript" src="../../public/js/three.js"></Script>
        <Script
          type="text/javascript"
          src="../../public/js/artoolkit5/artoolkit.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="jsartoolkit5/artoolkit.api.js"
        ></Script>
        <Script
          type="text/javascript"
          src="threex/threex-artoolkitsource.js"
        ></Script>
        <Script
          type="text/javascript"
          src="threex/threex-artoolkitcontext.js"
        ></Script>
        <Script
          type="text/javascript"
          src="threex/threex-arbasecontrols.js"
        ></Script>
        <Script
          type="text/javascript"
          src="threex/threex-armarkercontrols.js"
        ></Script>
      </HEAD>
      <p id="demo"></p>

      <Header>ARマーカーの読み取り</Header>
      <h1>This is camera page!</h1>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Script src="./cube_and_string.js" />
    </>
  );
}

// var scene, camera, renderer, clock, deltaTime, totalTime;

// var arToolkitSource, arToolkitContext;

// var markerRoot1, markerRoot2;

// var mesh1;

// //export let readId = -1;

// initialize();
// animate();

// function initialize() {
//   scene = new THREE.Scene();

//   let ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
//   scene.add(ambientLight);

//   camera = new THREE.Camera();
//   scene.add(camera);

//   renderer = new THREE.WebGLRenderer({
//     antialias: true,
//     alpha: true,
//   });
//   renderer.setClearColor(new THREE.Color('lightgrey'), 0);
//   renderer.setSize(640, 480);
//   renderer.domElement.style.position = 'absolute';
//   renderer.domElement.style.top = '0px';
//   renderer.domElement.style.left = '0px';
//   document.body.appendChild(renderer.domElement);

//   clock = new THREE.Clock();
//   deltaTime = 0;
//   totalTime = 0;

//   ////////////////////////////////////////////////////////////
//   // setup arToolkitSource
//   ////////////////////////////////////////////////////////////

//   arToolkitSource = new THREEx.ArToolkitSource({
//     sourceType: 'webcam',
//   });

//   function onResize() {
//     arToolkitSource.onResize();
//     arToolkitSource.copySizeTo(renderer.domElement);
//     if (arToolkitContext.arController !== null) {
//       arToolkitSource.copySizeTo(arToolkitContext.arController.canvas);
//     }
//   }

//   arToolkitSource.init(function onReady() {
//     onResize();
//   });

//   // handle resize event
//   window.addEventListener('resize', function () {
//     onResize();
//   });

//   ////////////////////////////////////////////////////////////
//   // setup arToolkitContext
//   ////////////////////////////////////////////////////////////

//   // create atToolkitContext
//   arToolkitContext = new THREEx.ArToolkitContext({
//     cameraParametersUrl: 'data/camera_para.dat',
//     detectionMode: 'mono',
//   });

//   // copy projection matrix to camera when initialization complete
//   arToolkitContext.init(function onCompleted() {
//     camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
//   });

//   ////////////////////////////////////////////////////////////
//   // setup markerRoots
//   ////////////////////////////////////////////////////////////

//   let loader = new THREE.TextureLoader();
//   let texture = loader.load('images/border.png');

//   let patternArray = [
//     'letterA',
//     'letterB',
//     'letterC',
//     'letterD',
//     'letterF',
//     'kanji',
//     'hiro',
//   ];
//   let colorArray = [
//     0xff0000, 0xff8800, 0xffff00, 0x00cc00, 0x0000ff, 0xcc00ff, 0xcccccc,
//   ];
//   //markerControlsを配列の要素として取り扱う
//   let markerControlsarray = new Array();
//   let readId = -1;

//   for (let i = 0; i < 7; i++) {
//     let markerRoot = new THREE.Group();
//     scene.add(markerRoot);
//     //let markerControls = new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
//     //	type : 'pattern', patternUrl : "data/" + patternArray[i] + ".patt",
//     //});
//     markerControlsarray.push(
//       new THREEx.ArMarkerControls(arToolkitContext, markerRoot, {
//         type: 'pattern',
//         patternUrl: 'data/' + patternArray[i] + '.patt',
//       })
//     );

//     markerControlsarray[markerControlsarray.length - 1].addEventListener(
//       'markerFound',
//       () => {
//         readId = i + 1;
//         console.log('marker' + readId + ' is visible');
//       }
//     );

//     let mesh = new THREE.Mesh(
//       new THREE.CubeGeometry(1.25, 1.25, 1.25),
//       new THREE.MeshBasicMaterial({
//         color: colorArray[i],
//         map: texture,
//         transparent: true,
//         opacity: 0.5,
//       })
//     );
//     mesh.position.y = 1.25 / 2;
//     markerRoot.add(mesh);
//   }

//   //構造の予定：
//   //全部のマーカーのmarkercontrolsを動かす
//   //表示されたマーカーからそれに対応するARを表示して、配列番号をidとする
//   //idからデータベースを用いて文章を取り込む

//   //１つめ
//   //let markerRoot0 = new THREE.Group();//ここはfor文内で同じものを用いても大丈夫
//   //scene.add(markerRoot0);
//   //let markerControls0 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot0, {
//   //	type : 'pattern', patternUrl : "data/" + patternArray[0] + ".patt",
//   //});
//   //markerControlsarray.push(new THREEx.ArMarkerControls(arToolkitContext, markerRoot0, {
//   //	type : 'pattern', patternUrl : "data/" + patternArray[0] + ".patt",
//   //}));

//   //markerControlsarray[markerControlsarray.length - 1].addEventListener("markerFound", () => {
//   // マーカーが見つかっている時は毎秒呼ばれる
//   //うまくいかなかった、、for文が一瞬だからすぐ捨てられるのが原因？
//   //	console.log("marker0 is visible");
//   //});

//   /*
//     let mesh0 = new THREE.Mesh(
//       new THREE.CubeGeometry(1.25,1.25,1.25),
//       new THREE.MeshBasicMaterial({color:colorArray[0], map:texture, transparent:true, opacity:0.5})
//       );

//       mesh0.position.y = 1.25/2;
//       //作った正方形を表示するものリストの追加
//       markerRoot0.add( mesh0 );

//       //二つ目
//       let markerRoot1 = new THREE.Group();
//       scene.add(markerRoot1);
//       let markerControls1 = new THREEx.ArMarkerControls(arToolkitContext, markerRoot1, {
//         type : 'pattern', patternUrl : "data/" + patternArray[1] + ".patt",
//       });

//         markerControls1.addEventListener("markerFound", () => {
//           // マーカーが見つかっている時は毎秒呼ばれる
//           //うまくいかなかった、、for文が一瞬だからすぐ捨てられるのが原因？
//           console.log("marker1 is visible");
//         });

//         let mesh1 = new THREE.Mesh(
//           new THREE.CubeGeometry(1.25,1.25,1.25),
//           new THREE.MeshBasicMaterial({color:colorArray[1], map:texture, transparent:true, opacity:0.5})
//           );

//           mesh1.position.y = 1.25/2;
//           //作った正方形を表示するものリストの追加
//           markerRoot0.add( mesh1 );
//         */
// }

// function update() {
//   // update artoolkit on every frame
//   if (arToolkitSource.ready !== false)
//     arToolkitContext.update(arToolkitSource.domElement);
// }

// function render() {
//   renderer.render(scene, camera);
// }

// function animate() {
//   requestAnimationFrame(animate);
//   deltaTime = clock.getDelta();
//   totalTime += deltaTime;
//   update();
//   render();
// }

// export default CameraPage;
