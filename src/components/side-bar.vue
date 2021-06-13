<template>
  <v-navigation-drawer v-model="drawer" app>
    <br>
    <div class="text-subtitle-1">Tus artistas</div>
    <v-virtual-scroll
        :items="links"
        :item-height="50"
        height="190"
    >
      <template v-slot="{ item }">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2">{{ item[0] }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>
    <br>
    <v-divider></v-divider>
    <br>
    <div class="text-subtitle-1">Tus eventos</div>
    <v-virtual-scroll
        :items="links"
        :item-height="50"
        height="190"
    >
      <template v-slot="{ item }">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2">{{ item[0] }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-virtual-scroll>


  </v-navigation-drawer>
</template>

<script>
export default {
  name: "side-bar",
  data: () => ({
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
    titles: [
      'title1',
      'title1',
      'title1',
      'title1'
    ]
  })
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