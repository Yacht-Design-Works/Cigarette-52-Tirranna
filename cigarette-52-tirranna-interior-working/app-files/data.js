var APP_DATA = {
  "scenes": [
    {
      "id": "0-location-a",
      "name": "Location A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.1217596515143065,
        "pitch": 0.5590070895141306,
        "fov": 1.4247463008564816
      },
      "linkHotspots": [
        {
          "yaw": 1.943247878987843,
          "pitch": 0.8860507398889688,
          "rotation": 0,
          "target": "1-location-b"
        },
        {
          "yaw": -2.801818452495077,
          "pitch": 0.3913542255983806,
          "rotation": 0.7853981633974483,
          "target": "2-location-head"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-location-b",
      "name": "Location B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.563046210051671,
        "pitch": 0.20606056654425942,
        "fov": 1.4247463008564816
      },
      "linkHotspots": [
        {
          "yaw": 1.3795778822283182,
          "pitch": 0.5289060550402418,
          "rotation": 0,
          "target": "2-location-head"
        },
        {
          "yaw": 1.8807865051458679,
          "pitch": 0.6885615446884383,
          "rotation": 0.7853981633974483,
          "target": "0-location-a"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-location-head",
      "name": "Location Head",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.4655408728413324,
        "pitch": 0.8188227156555357,
        "fov": 1.4247463008564816
      },
      "linkHotspots": [
        {
          "yaw": -0.3413778289197982,
          "pitch": 0.6932562744457034,
          "rotation": 0,
          "target": "1-location-b"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Cigarette 52 Tirranna Interior Working",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
