<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-title>Game</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="openAbout">
            <ion-icon slot="icon-only" :icon="helpCircleOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content class="ion-padding ion-justify-content-center">

      <ion-card>
        <ion-card-content>
          <ion-img 
            src="https://via.placeholder.com/400x300.png?text=Large+Icon"
            alt="screenshot" 
          ></ion-img>
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

      <ion-button fill="outline" expand="block" class="ion-margin-bottom">Quick tutorial</ion-button>
      <ion-button fill="solid" expand="block">Start</ion-button>
    
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { 
  IonContent, IonHeader, IonPage, IonTitle, IonIcon, IonButtons,
  IonToolbar, IonCard, IonCardContent, IonImg, IonButton 
} from '@ionic/vue';
import { helpCircleOutline } from 'ionicons/icons';

const openAbout = () => {
  console.log('open about')
};

</script>

<style scoped>
  ion-card {
    margin: 0 10vw 10vw 10vw;
  }
  ion-image {
    width: 100%;
  }
  ion-col:last-child {
    text-align: right;
  }
</style>
