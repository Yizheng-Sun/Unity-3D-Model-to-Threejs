# Unity-3D-Model-to-Threejs
Export .fbx form 3D models from Unity and Render them in browser using Threejs

## export 3D model in Unity
![Screenshot 2022-07-21 at 14 30 32](https://user-images.githubusercontent.com/105564219/180226019-c3a50c73-038e-42a4-ad59-a4eabab28b5e.png)

Use FBX Exporter to export .fbx file. 
FBX Exporter can be found at:
https://docs.unity3d.com/Packages/com.unity.formats.fbx@2.0/manual/index.html
<br> .fbx 3D models are in dist/client/models
<img width="1771" alt="Screenshot 2022-07-21 at 14 33 38" src="https://user-images.githubusercontent.com/105564219/180226721-26533821-8ac2-415f-95bb-bc8a91f6121d.png">

Render .fbx model (mesh without texture) in Browser using Threejs. Implementation is in src/client/client.ts
![Screenshot 2022-07-21 at 01 03 57](https://user-images.githubusercontent.com/105564219/180227438-f9922a8a-dcf5-4789-994d-b467dac00f92.png)
![Screenshot 2022-07-21 at 01 02 17](https://user-images.githubusercontent.com/105564219/180227462-4b62ed23-f4e4-4ff6-8664-eb1082a1e186.png)

Unity 3D models are from project CapsuleEndoscope
/
VirtualCapsuleEndoscopy
https://github.com/CapsuleEndoscope/VirtualCapsuleEndoscopy
