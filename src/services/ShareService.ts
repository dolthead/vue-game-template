import { Share } from '@capacitor/share';
import { Clipboard } from '@capacitor/clipboard';

export const share = async (toastController: any) => {
  const canShare = await Share.canShare();
  if (canShare.value) {
    return Share.share({
      title: 'Game',
      text: 'See if you can beat my score!',
      url: 'https://sharetemplate.web.app',
      dialogTitle: 'Share with buddies',
    });
  } else {
    await Clipboard.write({
      string: `Game
See if you can beat my score!
https://sharetemplate.web.app`
    });
    const toast = await toastController.create({
      message: 'Copied to the clipboard',
      duration: 3000,
      position: 'top'
    });
    return toast.present();
  }
}
