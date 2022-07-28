export class DummyApi {

    static getItems() {
        const itemsResponse = {
            data: [
              {
                id: "1",
                title: "The Beatles - Abbey Road",
                price: 220,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/abbey_road.jpg",
                category:"INTERNATIONAL",
                stock:5
              },
              {
                id: "2",
                title: "The Rolling Stones - Aftermath",
                price: 218,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/aftermath.jpg",
                category:"INTERNATIONAL",
                stock:3
              },
              {
                id: "3",
                title: "Jimmy Hendrix - Band of Gypsys",
                price: 200,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/hendrix.jpg",
                category:"INTERNATIONAL",
                stock:1
              },
              {
                id: "4",
                title: "Charly Garcia - Clix Modernos",
                price: 210,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/clix.jpg",
                category:"ARGENTINA",
                stock:10
              },
              {
                id: "5",
                title: "Soda Stereo - Doble Vida",
                price: 260,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/sodadoblevida.jpg",
                category:"ARGENTINA",
                stock:14
              },
              {
                id: "6",
                title: "Pescado Rabioso - Artaud",
                price: 200,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/spinetaartaud.jpg",
                category:"ARGENTINA",
                stock:6
              }
            ],
          };
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    json: () =>  new Promise((resolve, reject) => {resolve(itemsResponse)})
                });
            }, 2000);
        });

    }
}