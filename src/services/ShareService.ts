import { Share } from '@capacitor/share';
import { Clipboard } from '@capacitor/clipboard';

const url = 'https://ionicgametemplate.web.app';
const msg = 'See if you can beat my score!';

export const share = async (toastController: any) => {
  const canShare = await Share.canShare();
  if (canShare.value) {
    return Share.share({
      title: 'Game',
      text: msg,
      url: url,
      dialogTitle: 'Share with buddies',
    });
  } else {
    await Clipboard.write({
      string: `Game\n${msg}\n${url}`
    });
    const toast = await toastController.create({
      message: 'Copied to the clipboard',
      duration: 3000,
      position: 'top'
    });
    return toast.present();
  }
}
