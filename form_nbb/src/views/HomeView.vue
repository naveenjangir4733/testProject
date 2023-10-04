<!--<template>-->

<!--    <div>-->
<!--      <v-row justify="center">-->
<!--        <v-btn-->
<!--            color="primary"-->
<!--            class="mt-12"-->
<!--            @click="store.dialog=true"-->
<!--        >-->
<!--          Open Form-->
<!--        </v-btn>-->
<!--        <v-dialog-->
<!--            persistent-->
<!--            scrollable-->
<!--            v-model="store.dialog"-->
<!--        >-->

<!--          <div class="d-flex align-center justify-center">-->
<!--            <v-row justify="center">-->
<!--              <v-card-->
<!--                  elevation="12"-->
<!--                  height="550"-->
<!--                  class="w-75"-->
<!--              >-->
<!--                <v-main scrollable-->
<!--                        class="py-16 px-8"-->
<!--                >-->
<!--                  <v-window v-model="step">-->


<!--                    <v-window-item :value="1">-->

<!--                      <PersonalPage/>-->

<!--                    </v-window-item>-->


<!--                    <v-window-item :value="2">-->

<!--                      <EmployeePage/>-->

<!--                    </v-window-item>-->

<!--                    <v-window-item :value="3">-->

<!--                      <GuardianPage/>-->

<!--                    </v-window-item>-->


<!--                  </v-window>-->

<!--                </v-main>-->
<!--                <v-divider></v-divider>-->

<!--                <div class="container">-->

<!--                  <v-card-actions class="px-0">-->
<!--                    <v-btn-->
<!--                        v-if="step > 1"-->
<!--                        variant="plain"-->
<!--                        color="primary"-->
<!--                        @click="step&#45;&#45;"-->
<!--                    >-->
<!--                      <v-icon-->
<!--                          start-->
<!--                          icon="mdi-arrow-left"-->
<!--                      ></v-icon>-->
<!--                      Back-->

<!--                    </v-btn>-->
<!--                    <v-btn-->
<!--                        v-if="step <= 1"-->
<!--                        color="primary"-->
<!--                        variant="plain"-->
<!--                        @click="store.dialog = false"-->
<!--                    >-->
<!--                      <v-icon-->
<!--                          icon="mdi-close"-->
<!--                      ></v-icon>-->
<!--                      Close-->
<!--                    </v-btn>-->
<!--                    <v-spacer></v-spacer>-->

<!--                    <v-btn-->
<!--                        v-if="step < 3"-->
<!--                        variant="plain"-->
<!--                        color="primary"-->
<!--                        @click="next"-->
<!--                    >-->

<!--                      next-->
<!--                      <v-icon-->
<!--                          start-->
<!--                          icon="mdi-arrow-right"-->
<!--                      ></v-icon>-->


<!--                    </v-btn>-->

<!--                    <v-btn-->
<!--                        v-if="step >= 3"-->
<!--                        color="primary"-->
<!--                        variant="plain"-->
<!--                        @click="Submit"-->
<!--                    >-->
<!--                      Submit-->
<!--                    </v-btn>-->

<!--                  </v-card-actions>-->
<!--                </div>-->
<!--              </v-card>-->
<!--            </v-row>-->
<!--          </div>-->
<!--        </v-dialog>-->
<!--      </v-row>-->
<!--    </div>-->

<!--</template>-->
