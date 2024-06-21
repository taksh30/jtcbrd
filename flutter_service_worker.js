'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b7b64c797677ab6e9c5763fbc23df24f",
".git/config": "a7395b4d39095a0ad3b1d7256f9b73ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c9ab6149f46de26b6bcedf8fe5429819",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "52f0289561a5c4990284cd3af1eabea2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfecacdb29a7bb19fac1e42753f2c88d",
".git/logs/refs/heads/main": "955ea05a9b927e7ba3a277d1330018b0",
".git/logs/refs/remotes/new-origin/main": "c00d0a4f9732ea1ef7de85db4fc55826",
".git/logs/refs/remotes/origin/main": "fdca123f7c00abca733cde2ff4e7965a",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/05/e3feab11f7038883b8335444b1b3f4344f76ca": "dd82bc032d4de78a3236a523f9243d44",
".git/objects/07/1939560f75fec37c921c56df83f5305d2bc53f": "9bfbdac90828cd59988b9fc5d86ad477",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/01d8d8614672e7e3ca8cbe7b9454ec833bd665": "d77a8b962da7c5d35cf71f2606a078ab",
".git/objects/0c/19fd2ad8eb2d571b7a9c109ce71b1f0cfc40b2": "8d2c0e1b875b0df4748b4ecb77865d6c",
".git/objects/0c/5b2bc53c86b9c8db3b514eb2038c7bf962fd1e": "f6c23a9f8a2b9eb3f1dc149d99bba173",
".git/objects/0d/05e720bd8cd69b1fb668f399e0b834e836d790": "041de78c1e945a300a09616afa3f0e60",
".git/objects/0d/454c5215289d3f576cff13ad64f94bd0383fed": "5738e4578caab0c72813a8d5a491af0c",
".git/objects/10/d958f61a94ea7d88f5015f31b3882332724ee7": "c354c65e5bf8906c406330f94ec667e2",
".git/objects/12/5f4fb0dc96a0f8a100c6f2969c445341369ccd": "0a51178ef48c2cf02af23b7e15b78e87",
".git/objects/12/f51d3f7edf313b4f8e329700047d53ca66ac4b": "527e073c654412e240e27cd74bf05aae",
".git/objects/13/4fa498d382ea448d3febecf0b56bd64233e772": "46d7b0cd36ce0215f098e99dc409a4bb",
".git/objects/13/ca993032576ee8d4b89114ddf1217eb774eb59": "4ce76830f0166a18364d64e187a349c3",
".git/objects/15/f1a516a9b84a532a615ec54160828cc49d0d65": "f3e923cafd51c17947c4a197568fbb63",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/cd92265ae4e8b2faf520726808c1cecbdde163": "d9fd43888edb0104437a5e40fc55d2b7",
".git/objects/1c/551b80e62a2aab6cbfcb80b757129caa346f07": "e13f5d2741eb11e00fcefd8b6ced819b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/20706b939376e0b0624bebd787f056fe433cb7": "a6e5132ec5faaebbcb44eed51e9168f2",
".git/objects/20/ec2e2556ad5d6b2029b66f83214cb3f5f722b5": "b1c8c23a45f327f1c68c60996e9dd681",
".git/objects/25/70b91756cfcaa4e069d62ed2f9486a5aa98159": "f3b04867c48fe92cf97fd712aec4c6cf",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/a16c3d719d1bfb092a487801c9e645ab339c6c": "bb5182d9a0a03805b5c0944e5f04d5b9",
".git/objects/2a/951968176b24548a653df29fd853b1f1686cbc": "abd723a955fbc0c3f66ba0c84d96fb28",
".git/objects/2b/27381249fd6ab59b9fcb22245039d650435609": "a80d811ad9756fdcbe03ebea549b9cef",
".git/objects/34/0cea2b3abbf3baa3f3c7e290036e8cbb1992f5": "9aa0fcd72bf3d4bc2b9f93768260a249",
".git/objects/36/8b0522476f1817c390005f7f85ab9e2003b05f": "64586b92b814391fef3027823b967c9f",
".git/objects/37/d62c7208f33858b994b3bfd348685ce77be1bb": "3b7aa6062baf4c53ce9fd490cf0523ed",
".git/objects/3a/fb6fe8095f0dbd35bce811168cf6b974c28f47": "a119b2abd6461bc55597972d16ac2d27",
".git/objects/45/a1c9d1a4dd4bc448d22e11a795915ea0de8d1e": "fad9034995be8d35991c6dbbf09142f6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7db3e0e0b08635fbfe20cb1d9a1e92934d570a": "1a0f34af731f925523d517c2c1878123",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/2553f105622921e782ba116d61f1b80ae32465": "8463df1999ccba60755c2c3f297a687e",
".git/objects/4e/6f35f21c68039a4edebb0750dc976cce7e80e6": "dd9c6b57cce852e0736fea3b45eea676",
".git/objects/4f/b3d2572dc61d5fa0cae8b2ea64e2a4d683848d": "dd8fb8af7e0bf258c4bd0a45f048b973",
".git/objects/52/5fdc52ee4bf148ab831587375e7414470e73e5": "521dfc09d8d0ba2289f93cb372a4bce1",
".git/objects/55/654a1ace5db42dab1eb683c17fe9f107227fb0": "0442a51d43a10308c2741751183eac2c",
".git/objects/58/904221d6c3115b313dff6dbf5ed1112f2f07c8": "760035bcf0a724039df1f59eac7f4d55",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/623cddbbc06767d9120720457bd5b43da95464": "8a3b4b9fa40cb3d79d7c7286b427dd25",
".git/objects/5c/77efa98066c10392bbfbdc3fc5c2194e022729": "69e449555b6892e733a450a342a834ab",
".git/objects/5d/1454a0c79a1142265c49ef2097eb3253d9bd79": "80b662a5bdb99b9ec9fa927797e2769d",
".git/objects/5d/b25812b20da0a40c9a9bfffb9c7310df890cde": "1445b11fd7b7759c5063071869681704",
".git/objects/66/2ed88334d7fb10c238699f8c5d6a50371f1578": "8343e3ff21cb3ece1de10219fc59935e",
".git/objects/68/86ec37dac658c1262f9961bd2287c960bf598e": "9fd845c7e122e6d8ebb19437001ee8e7",
".git/objects/6b/273b0f812e8e7ca8d79ee430d7fa284a5b4aed": "387f149b441e4067ba080e0af6b8ac2e",
".git/objects/6b/a1105c20c37ab50e0f03f3eb447ff63bfc5a41": "da3505fbbbb396ed59d873bf9a35e587",
".git/objects/6e/73bd428814d8c779381a6b3e1da84ab3954fcd": "0eb403ea1c5d1d549089423ef35c2e53",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/6c3d0f2b644577f2371b2f58a5ec8f6e84a563": "7dd90948c617d6430a3adc9eed802209",
".git/objects/7f/3b3621e604625c0e4d9f9381e9c0c184fca0a3": "401cee574f2ed6cc8e11a824e2436a50",
".git/objects/83/48061dd10885cb8fe97b20841aefe0f5f2f1c2": "443f613d0bdb8f0aae20a7a6d3d50e5b",
".git/objects/84/699e1e4d6f6da77fdaf41aef8736469086d92a": "8960b7c0f3f33213b76e37d95079873a",
".git/objects/84/ed1e0efa7ff3b6f4247f5abc0b9329e844b428": "3037b22054bfd18e88f09f0af67739d2",
".git/objects/85/0dc2619e793e0295c032751ca809df0e6e2574": "202fd487417d3df913b0104043935596",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8c/39620b1c6b688be6b1c70ecc11d8ef777f533d": "d5a774c2f3f55096b5208ca20e18a198",
".git/objects/91/d21a72540bf770620b2540a59286208447c70b": "e8f64f0601bf4ee720dc5ebbd4fd539a",
".git/objects/93/054b4a4acc6bb6ae300c3e1e008b4a235d53dd": "7d5e65b9c5fbd08e98c6abb4234b507e",
".git/objects/94/8b7e054b36438376582021bffef2410eb4662c": "368bda27ff3432461090203f06a0db81",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/78eb11eaf677b0bad83d9ab7d2a8550fb000f4": "40512612a7031effdf90c3287edbf818",
".git/objects/99/1f128d3cf5a1c1f2da97080065c69c86446018": "fc821029bf0ea44a9813842a4188a67d",
".git/objects/9b/7b358255477016c378d57f937a5ae9fe80908d": "4cf232c26885ec3000a8a8b62770dfed",
".git/objects/a6/2941f9bb6231a37225a058e3bea4030b00365a": "d759b8e2fdc00468fcf1f6d76b7cf514",
".git/objects/a9/d07cbafb57cb6801bfe671222680ba44ff3659": "90abbbb799f455706421f2d113f45206",
".git/objects/aa/080d21dd5d0690db9a453cd4e325140089cbcd": "01450cdf3f769361d055585a84a63309",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/9ac495c974c8b9634dec94aa65e11c0f4518b1": "4799a2cc194a5fd67d8ca8cc4b1d06b5",
".git/objects/b0/9e6bdae300b7a471e30b635425c992fe3600ef": "62d93a3f18b3d1c4f4e06859b99ce406",
".git/objects/b1/e7cee04a6073fb53f65c66649639c41492ffcf": "4b8b952a70f2a9a348ea62c4457543f9",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/fba61db68a44341899e8afe290a3ad2d443f81": "769301bbf45bc2e9371ca03a1b947df9",
".git/objects/c3/b84813b0d50785d149e2cca57292a3f7a329c7": "6a71193378e603851ff7fa5718413439",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cb/96f14dd2e75b28b00a26c3aa4e28fea226a7b5": "446fd0f3f688ce1de475d9c9ca6f910f",
".git/objects/d3/d0dade9e21802439252d1248d73c58e6caa211": "edc3e86a7241c5ec8f5e009f00b9faf5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/df/c67109949d0ce317147524afa93046e30b87e4": "07386c54d9be55056bdbf412524a0a87",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/5f022286b641d097bf61f437f882c4d19d700f": "17fdaa20513c469b6568aa8b1edb6d8e",
".git/objects/f0/f388c3d5a2be7b3acf597821fd8347ce0d9341": "1ee617f3e16da0c539ced633e96ed4d0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/308ab0e6d88b4aa89e4d6e484b6e96ffe5d3df": "beed6b21da6e12bd13f2f0369d3adca7",
".git/objects/fa/23c082069cb5942316a8814c70bd98518c80ef": "017e9ab5f8ec0d316da03a5085139763",
".git/ORIG_HEAD": "61956885282f22ef75e6b8daac64c113",
".git/refs/heads/main": "61956885282f22ef75e6b8daac64c113",
".git/refs/remotes/new-origin/main": "d22add3ad68e74c4ab9c4cc0ac26135c",
".git/refs/remotes/origin/main": "64a685944dabd7d2c9dd0c671f5857f7",
"assets/AssetManifest.bin": "d3805292163dd0d033cf9547846f6ab2",
"assets/AssetManifest.bin.json": "0564799606403fd8b1580adc054a0d41",
"assets/AssetManifest.json": "41a7f6a0266718285a718c3aa801f065",
"assets/assets/aboutUsImg.png": "377882de5b5691c6a2ce0865c2597dd5",
"assets/assets/birdNet.jpg": "0f228a106f50d9cddce9098288a6a1e2",
"assets/assets/contactUsIllustration.png": "cf11e25f072453e324e3111c05618ffa",
"assets/assets/IMG_7967.jpg": "e6b7932c8b8a9487e5c2aed3f13b45c9",
"assets/assets/IMG_7972.jpg": "429dcd4e0386ace2540a3453e5c7bad8",
"assets/assets/IMG_7974.jpg": "c20601c57ed244bf11bcd58617442f05",
"assets/assets/IMG_8012.jpg": "bee315e5cdec7b914577a81967853339",
"assets/assets/IMG_8014.mp4": "ef29f3f969561a10cd5e94ca9eae75b9",
"assets/assets/invisibleNet.jpg": "e328c46141559c22f64f0b340187b10d",
"assets/assets/jtcLogo.jpg": "94f7055420e04e7e0b0fd19e89e09352",
"assets/assets/pcs.png": "9995bfadcc6527c6105024296bbd31a7",
"assets/assets/piping.png": "76237d12004ce279b8f2eb0463e49ed7",
"assets/assets/porous.png": "7d67ae942f4decb7164d1c50d1ea5f0e",
"assets/assets/termite.png": "7190c2b6012ebd741ea70c28b97c4f02",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dbdb3ade282ace2a964cb71010a09033",
"assets/NOTICES": "f923f229d236bbb543f047797762dde9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "9a05f729f5a1dc37ba02fc130540887f",
"favicon.png": "bfcf406ca687417fbddd0ef23cd5ac71",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "aba89357b731479dc7056926808c3c5b",
"icons/Icon-512.png": "cd5e642740680aff124fdf095b642379",
"icons/Icon-maskable-192.png": "1ed6c30e26e476cc89a905c2bb9cc913",
"icons/Icon-maskable-512.png": "c264ebb3db57b1a5bafe9a989ba119df",
"index.html": "2fe21289621a34dca17b6c1b72d59776",
"/": "2fe21289621a34dca17b6c1b72d59776",
"main.dart.js": "4b7be34b109f2619be2663950c5ae060",
"manifest.json": "bf3a48f78ecf90a8fd751eb28bb139f0",
"version.json": "18d14e847ad70816c8ed10214d568ad0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
