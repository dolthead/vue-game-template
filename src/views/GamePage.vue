<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Game</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="share(toastController)">
            <ion-icon slot="icon-only" :icon="shareOutline"></ion-icon>
          </ion-button>
          <ion-button @click="openAbout">
            <ion-icon slot="icon-only" :icon="helpCircleOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding">

      <ion-card>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col>Stats</ion-col>
              <ion-col>here</ion-col>
            </ion-row>
            <ion-row>
              <ion-col>More stats</ion-col>
              <ion-col>here</ion-col>
            </ion-row>
            <ion-row>
              <ion-col>Final stats</ion-col>
              <ion-col>here</ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
  import { 
    IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonButtons,
    IonToolbar, IonCard, IonCardContent, IonBackButton, IonButton,
    IonGrid, IonRow, IonCol, modalController, toastController
  } from '@ionic/vue';
  import AboutPage from '../views/AboutPage.vue';
  import { helpCircleOutline, shareOutline } from 'ionicons/icons';
  import { share } from '../services/ShareService';

  const openAbout = async () => {
    const modal = await modalController.create({
      component: AboutPage,
      cssClass: "my-custom-class",
      componentProps: {
        title: "About",
      },
    });
    return modal.present();
  };

</script>

<style scoped>
  ion-col {
    text-align: center;
  }
</style>
