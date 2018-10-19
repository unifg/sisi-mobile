import { Camera, CameraOptions } from '@ionic-native/camera';


class Util {
  public getPicture ():string {
    let data: string
    const camera = new Camera()
    const options: CameraOptions = {
      quality: 100,
      destinationType: camera.DestinationType.DATA_URL,
      encodingType: camera.EncodingType.JPEG,
      mediaType: camera.MediaType.PICTURE
    }
    camera.getPicture(options).then((imageData) => {
    data =  'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Tratar erro.
    })
    return data
  }
}

export const utils = new Util()
