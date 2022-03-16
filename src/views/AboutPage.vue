<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>About Game</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeAbout">
            <ion-icon slot="icon-only" :icon="closeOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div id="container">
        <ion-button expand="block" @click="closeAbout">Close</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
  import { closeOutline } from "ionicons/icons";
  import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    modalController,
  } from "@ionic/vue";

  const closeAbout = () => {
    modalController.dismiss();
  };
</script>

<style scoped>
</style>