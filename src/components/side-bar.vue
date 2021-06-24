<template>
  <v-navigation-drawer v-model="drawer" app>
    <br>
    <div class="text-subtitle-1">Tus artistas</div>
    <v-virtual-scroll
        :items="artistsFollowed"
        :item-height="50"
        height="190"
    >
      <template v-slot="{ item }">
        <v-list-item link :to="goToArtist(item.id)">
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2">{{ item.brandName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
    <br>
    <v-divider></v-divider>
    <br>
    <div class="text-subtitle-1">Tus eventos</div>
    <v-virtual-scroll
        :items="titles"
        :item-height="50"
        height="190"
    >
      <template v-slot="{ item }">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2">{{ item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>


  </v-navigation-drawer>
</template>

<script>
// Services
import ArtistApiService from '../services/artists-api.service'
export default {
  name: "side-bar",
  data: () => ({
    artistsFollowed: [],
    titles: [
      'event1',
      'event2',
      'event3',
      'event4',
      'event5',
      'event6',
      'event7',
    ]
  }),
  created() {
    this.retrieveArtist();
  },
  methods:{
    retrieveArtist() {
      ArtistApiService.getAll()
      .then(response => {
        this.artistsFollowed = response.data;
        console.log(this.artistsFollowed);
      }).catch(e => { console.log(e);} )
    },
    goToArtist(num){ return `/artist/${num}`; }
  }
}
</script>

<style scoped>
.v-navigation-drawer{
  margin-top: 70px;
}
.text-subtitle-1{
  margin-left: 20px;
}

</style>