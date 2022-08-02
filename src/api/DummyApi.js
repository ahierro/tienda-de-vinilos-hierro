export class DummyApi {

    static getItems() {
        const itemsResponse = {
            data: [
              {
                id: "1",
                title: "The Beatles - Abbey Road",
                price: 220,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/abbey_road.jpg",
                category:"INTERNATIONAL"
              },
              {
                id: "2",
                title: "The Rolling Stones - Aftermath",
                price: 218,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/aftermath.jpg",
                category:"INTERNATIONAL"
              },
              {
                id: "3",
                title: "Jimi Hendrix - Band of Gypsys",
                price: 200,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/hendrix.jpg",
                category:"INTERNATIONAL"
              },
              {
                id: "4",
                title: "Charly Garcia - Clics Modernos",
                price: 210,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/clix.jpg",
                category:"ARGENTINA"
              },
              {
                id: "5",
                title: "Soda Stereo - Doble Vida",
                price: 260,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/sodadoblevida.jpg",
                category:"ARGENTINA"
              },
              {
                id: "6",
                title: "Pescado Rabioso - Artaud",
                price: 200,
                pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/spinetaartaud.jpg",
                category:"ARGENTINA"
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

    static getDetail(id) {
      const database = [
            {
              id: "1",
              title: "The Beatles - Abbey Road",
              price: 220,
              pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/abbey_road.jpg",
              category:"INTERNATIONAL",
              description: `VINILO REMASTERIZADO DE 180 GRAMOS

              NUEVO IMPORTADO
              
              ¡EN STOCK!
              
              SALE EN EL DIA POR MERCADO ENVIOS O FLEX
              
              TAMBIÉN PODÉS RETIRAR DE NUESTRO LOCAL EN MICROCENTRO
              
              TRACKINGLIST :
              
              1 Come Together
              2 Something
              3 Maxwell's Silver Hammer
              4 Oh! Darling
              5 Octopus's Garden
              6 I Want You (She's So Heavy)
              7 Here Comes the Sun
              8 Because
              9 You Never Give Me Your Money
              10 Sun King
              11 Mean Mr. Mustard
              12 Polythene Pam
              13 She Came in Through the Bathroom Window
              14 Golden Slumbers
              15 Carry That Weight
              16 The End
              17 Her Majesty`,
              stock:5
            },
            {
              id: "2",
              title: "The Rolling Stones - Aftermath",
              price: 218,
              pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/aftermath.jpg",
              category:"INTERNATIONAL",
              description: `TEMAS:
              1 Paint It, Black
              2 Stupid Girl
              3 Lady Jane
              4 Under My Thumb
              5 Doncha Bother Me
              6 Think
              7 Flight 505
              8 High And Dry
              9 It's Not Easy
              10 I Am Waiting
              11 Going Home`,
              stock:3
            },
            {
              id: "3",
              title: "Jimi Hendrix - Band of Gypsys",
              price: 200,
              pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/hendrix.jpg",
              category:"INTERNATIONAL",
              description: `1. WHO KNOWS 2. MACHINE GUN 3. CHANGES 4. POWER TO LOVE 5. MESSAGE TO LOVE 6. WE GOTTA LIVE TOGETHER`,
              stock:1
            },
            {
              id: "4",
              title: "Charly Garcia - Clics Modernos",
              price: 210,
              pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/clix.jpg",
              category:"ARGENTINA",
              description: `Vinilo - LP - Charly Garcia - Clics Modernos

              ———— NUEVO - CERRADO ————
              
              Año: 2020
              
              Sello: Universal
              
              Procedencia: Argentina
              
              
              Fotos ilustrativas, disco nuevo cerrado
              `,
              stock:10
            },
            {
              id: "5",
              title: "Soda Stereo - Doble Vida",
              price: 260,
              pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/sodadoblevida.jpg",
              category:"ARGENTINA",
              description: `:. ENVÍOS
              . Mensajería / Moto: En Capital durante el día
              . Mercado Envíos: Calculás el costo desde la publicación según el método que prefieras
              * En caso de querer más de 1 artículo, ofertá y pagá el envío de uno, en los otros poné "lo retiro" y notificanos por mensaje para sumarlos al mismo paquete.
              
              . Envíos por Correo Argentino y Vía Cargo (consultar costo)
              . NO HACEMOS ENVÍOS CONTRAREEMBOLSO`,
              stock:14
            },
            {
              id: "6",
              title: "Pescado Rabioso - Artaud",
              price: 200,
              pictureUrl: "https://tienda-vinilos-hierro.s3.amazonaws.com/spinetaartaud.jpg",
              category:"ARGENTINA",
              description: `A1-TODAS LAS HOJAS SON DEL VIENTO A2-CEMENTERIO CLUB A3-POR A4-SUPERCHERA A5-LA SED VERDADERA B1-CANTATA DE PUENTES AMARILLOS B2-BAJAN B3-A STAROSTA, EL IDIOTA B4-LAS HABLADURAS DEL MUNDO
              `,
              stock:6
            }
          ];
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({
                  json: () =>  new Promise((resolve, reject) => {resolve(database.filter(item => item.id === id))})
              });
          }, 2000);
      });

  }
}