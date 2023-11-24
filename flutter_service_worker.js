'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3fe4fd5df2020acccdd334a29a3cc4f4",
"index.html": "8f86060f93a8559bb5b4475a11479dd3",
"/": "8f86060f93a8559bb5b4475a11479dd3",
"main.dart.js": "dd375e1a160ced5986cf4cb1fb229367",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "922b2865c088af1f7a836acda5952090",
"icons/favicon-16x16.png": "07b297ed32b589a2e88ebcbc729825af",
"icons/favicon.ico": "5b367653a01148d5f782ead72d5f03f4",
"icons/android-chrome-192x192.png": "2e9a960799fb716ec53dedfe9f03cdcf",
"icons/apple-touch-icon.png": "b04a680b2d3ee0586f2a146125cb0678",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/android-chrome-512x512.png": "5bb397f340f8f7c4858cc836d5dc214e",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "7ca88a417c9e41c8cdd2bfc890db27bb",
"manifest.json": "cf45190907d344e52142f1d5a28e5da7",
".git/config": "4efbb5fa5eae11ed8532e93ea3ec807c",
".git/objects/92/7731f84b77f5d7b625283bfcab011cc758cb81": "d107a0658cce8a04764567013b3b1509",
".git/objects/0c/00ad06228e1ce9974b7b79917debc9234f4af7": "9f86f19cef044ccda45c77d492d38051",
".git/objects/03/13e6142695026c80ca1eacc91b0bc99b76a656": "6da11ae33c7a05948053534d90aeae77",
".git/objects/9b/70c53c46e38e4123a9acd4c63b9d53ee0478eb": "b7d3bc0651dfaeef03625b5d6dc9fbc1",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/9d/96199d40f00d50ce8f6121b76b4622fe002a9a": "66ee4c3fac053572fdfaf8b5d860a75e",
".git/objects/a4/85b3fb70850412a3f2fd54ad9b3fb7128fdf1c": "9d2bbf82cd4bdf76e5840ebff3725d95",
".git/objects/ad/1aeba1064c30f95b1f4992e0801668f1fa24cb": "891ee792b795880d99a72ba4ad35d2c2",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/16b676f5c6ace4dbc081e3e558b6739342f38b": "b283d36dc11f45c3434e378da16666e4",
".git/objects/df/d714ba177f55a40f7ab9d87c7629270b46d5b5": "efa03bd3d13ac5fc6d043c0b7ea107c9",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/8a3a9ff0f075aa2546333ff1f8966b815b8294": "b2081b1ba2f85cc924857699cfdb09a4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/37f7bc19dca7046b6d1d4f20f5959631e942cb": "4596fe7a9f2564f6df15d4672e4bf2dd",
".git/objects/f5/4d8ac64ea27256d5fb445b9b45120e8729d93d": "9a1bd8084a3e9f5b3abea59304765cb8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/dd60d85d0fa02d3a31aea332ff1a84651a78b0": "1906d7f9ed69b6790e8092564356aa22",
".git/objects/27/345ff09cc8551e46f4a1f6f1b20fe6123b68fd": "07706a0033a53b5b4a8c6ed2d2c106b2",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7b/9c53160e2b6f4d9c0a84cafc07770900da199f": "00dd4492cde7216cc3b4b902c088aa94",
".git/objects/8f/2f3fd8e072747a996e49b54779480e7223beff": "94c18352b74b4d572aa70bf8c653a359",
".git/objects/8a/616d829a18854321f6fc4a5edc8caeff262192": "dc34791d7adbdd80bfdd4151aa027d40",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/41e97a76f6db2bd4e460bfb2652f95074bb8e8": "3c85416febbf53bf7e474016612a098d",
".git/objects/86/ce9a69da2c241832207880bd6e42045cfe888a": "855f14238365740b6b0820142d8187be",
".git/objects/86/df455289b9a2f9779a5396282d24d953287982": "056edb19c169eef073b16bc273f21abf",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/fb8eec6a9aa5ef74bca380721a85a3e4317bd6": "4e5b1fd41c0fb6d245c58fcd4f471e31",
".git/objects/6e/16111d1aae6c7e8044ac032b4bfe5110cbb826": "3a2a2ce4ca1dfe376ad043997b904a8c",
".git/objects/5c/07183ca34c8055c9c0e15753fbc4020bc2ac2e": "2975acf78b8ea63031f36597ad800294",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/62/a350a4e0f0b9cc452a76fb127fd01a2832003a": "330a07c478405b027fa12e874428b6fc",
".git/objects/96/850029eeca91cba7df4e04d7b9a64d22003df9": "624cce3ca85ff671a37f71092f960f60",
".git/objects/54/f9ef62379468013f3158916ebae18ed0cda8fc": "0976e6556ed6934ee54763bac9c10c0b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/ab1a831e53cf6ce722fc08e5c3a405488ffef1": "9c76b171c96976794b9cf169059ef1ca",
".git/objects/06/eab48c0a5f99a32bd3cc99b5d35ffa20cd8ebb": "c86d28f28ed5e375b439011f0451f9ea",
".git/objects/6c/d4053e086af124cddc630c7b2092a3c2ab0742": "af55020863a1f3dddc6bc161da17149a",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/97/00f02c17ccb20f29b2020ca2fe993d98a87c36": "e947aa6a0f7779b307e01d2c51b5c01a",
".git/objects/97/20be20fd8a303a1a5361299bd40aa24f36bcea": "ab07f4b17c433011aa592728627648d6",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/64/605b68442e35aa02a832cc1e3ed670f19e56e5": "56ae563084273f006aafe28203722efd",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/dd/71f3da119133246955c452891be3d1ecedd370": "589af2a83e809df9b21aa3353a4f04da",
".git/objects/dc/f0626555dd22cdb53cf39ddcc309ad14be107e": "602f5d153c8a633439f39257a1b91453",
".git/objects/a9/cdafe3cd0301941690578b48b0c8aa66c6de71": "5be5584d9c1ed18cc5bade0280781677",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/d4a6877b249afa9821d6483657a1121ec6f1a0": "016f84312b0133363c741aad37b278ad",
".git/objects/c3/9ccc96bc70ef3f4f70664062772ab860eb9885": "44551389baf4e6188dbd77f504eafe79",
".git/objects/ea/4fd369d031bd8d118182759bcf631b39015448": "815dc9a395d02e6b02e0b9c8de95ba78",
".git/objects/e1/b0553faeeba41b4df408854932f0ee940c6d3f": "97127343aaa2c501aef3986134fd315d",
".git/objects/cc/9484892916f855f0abd3537e6289e536e282bd": "9852ee3a3ddcb913995bfeacd35670d5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/c05cd05f575ddac365b823535a7baf365a6967": "231656cbb8b2ddfe1e0831b78b182dfa",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c5/358898c4e33024a7a638cccea0a18e3de4e1fe": "1dfa86f364f6b4a579e0655f00b059d8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/aeaae168f3380536684373273cdccd429e48d4": "6876f47b91147145a529d9e8cc30655a",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/23/c040c1bf912729128247f576bd7ab999ae13c6": "48fb21b17de52cee3e65cb6d95015bf1",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/76/a36c60d3dd45e267ecdebdf4d758278ad18806": "66e9b6edb724e9159f46cfd10d947910",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/47/0c4d909544ba0ea168694b56eefd277ef43ec7": "296df04c217858a2cd29c8be9791e9f2",
".git/objects/7a/e0bd454415bf2396681d2f2f829cf9baf737bb": "4c4c38f0a9b6045668db304253d65047",
".git/objects/7a/821d4664dbf06fad83b96263c0eb0e8003e7ae": "97cb963b1cca33b9b43f82773db32be2",
".git/objects/14/d2921dcdf179b8c60f313dbad93ba6457059e2": "82a4cd1182c4350d5737b544775d42d1",
".git/objects/8e/b39e6cf4e6c29aabb2cea90bb5ff1c19482ab0": "6e06ef2da2fbcb3b0b076fd86cd0d1d2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "09a2b052003d7266cab73ced3ab0179d",
".git/logs/refs/heads/main": "fc32c1a61b4657e85cfb397d409c1411",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1fc34d8c239dd897805eb60cea6a9d10",
".git/index": "7eb9a1825688f88e6ae5b9f820791d86",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "d457249a2c54a0e49a3d69efd2c76c1b",
"assets/NOTICES": "f9165f033185854a3c2cb07547ffa634",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "06fc61265a834cddd6a28b7099020ffa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "573a1cdd1bc599ca67ecb39c8842b3be",
"assets/fonts/MaterialIcons-Regular.otf": "1f33787bde4fbcd8908e00ac21df673f",
"assets/assets/images/tuwaig_1.jpg": "d028a2cf09fd7e6862403432187522c1",
"assets/assets/images/albaharah_1.jpg": "4abb614cc51987b34ccc18f37292397e",
"assets/assets/images/tuwaig_2.jpg": "66419f5bac7ec1da1f4cdf225f180e9b",
"assets/assets/images/albaharah_3.jpg": "27b1b41175ab540a0cfe3943dba757a9",
"assets/assets/images/albaharah_2.jpg": "b37746e69b8562fe35fa559cf1f4ac5e",
"assets/assets/images/tuwaig_3.jpg": "7ee57d16dbefcdf7f8eafb1b193dfcd2",
"assets/assets/images/foodzik_1.jpg": "99eccfb216dbd8b68979d72ea1c97d55",
"assets/assets/images/my_pic_2.jpg": "c88c36b392a195f737229c4a5c8e0c30",
"assets/assets/images/foodzik_2.jpg": "d217ddc225e4364439a874f166ede274",
"assets/assets/images/foodzik_3.jpg": "c5af32f560579f6db5e35fdf35e842a2",
"assets/assets/images/my_pic.jpeg": "eae9b9f03426788a1f40306342152f53",
"assets/assets/images/my_pic.png": "6f9e2151c1435675f28d10bb5af96126",
"assets/assets/icons/xd.png": "82d9c18aa06b959bc03dbe30ec7e937e",
"assets/assets/icons/email.png": "4cde4b188b15b3df6d06358211c80590",
"assets/assets/icons/git.png": "dd9a828399c7544cffefafd9b3f74168",
"assets/assets/icons/experience.png": "fd3690830cd153ea42d7030c339e5f99",
"assets/assets/icons/instagram.png": "373f41494138ecb432e9e73732ac2c2b",
"assets/assets/icons/flutter.png": "785cb37c4a60be68e9cb599d45d93f6d",
"assets/assets/icons/github.png": "c6a7f19c9999cd209a27083777c6d086",
"assets/assets/icons/firebase.png": "398cfbc54967ad1260a7dbfc83fe7087",
"assets/assets/icons/java.png": "86d4b68a883e261bc60f65547dcd78e9",
"assets/assets/icons/android.png": "aa5b6a19cb2c05ed84efec5a53092eae",
"assets/assets/icons/project_management.png": "063feb621c6bd4b5feee983e26253149",
"assets/assets/icons/figma.png": "cd9c46318cb87f0c82da3c555368ca9e",
"assets/assets/icons/oop.png": "6917d73ffdb6d0daae4394e6b7c21425",
"assets/assets/icons/work_experience.png": "2611540ece5b25adc11782bfdc8f73db",
"assets/assets/icons/quality.png": "ea5ef092a54dfb8aa5c71224804ea652",
"assets/assets/icons/api.png": "bf9231b7e36dc38f1e26e8ee89df8125",
"assets/assets/icons/whatsapp.png": "1e21c90cd90449666069aa47f0fc79ed",
"assets/assets/icons/facebook.png": "aed3c5d820d3d0c762847ee596cc23be",
"assets/assets/icons/app_store.png": "7a466c025aa3d2661874c980169befef",
"assets/assets/icons/dart.png": "f60969a204a69d89948a7db20d5a4e9d",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
