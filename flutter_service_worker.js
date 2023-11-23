'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3fe4fd5df2020acccdd334a29a3cc4f4",
"index.html": "4d0f87c5e56dc5b99505171b1c0d541d",
"/": "4d0f87c5e56dc5b99505171b1c0d541d",
"main.dart.js": "7285ac672323b2c2eca0ce4899529f39",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cf45190907d344e52142f1d5a28e5da7",
"assets/AssetManifest.json": "d457249a2c54a0e49a3d69efd2c76c1b",
"assets/NOTICES": "779b3621c8d99a7b5a6f304398749d37",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "06fc61265a834cddd6a28b7099020ffa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "573a1cdd1bc599ca67ecb39c8842b3be",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
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
