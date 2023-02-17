import React from 'react'
import c from '../styles/DeviceSubPages.module.scss'

type Char = {
    type: string
    description: string
}

interface DeviceCharacteristicsProps {
    deviceCharacteristics?: Char[]
}

export default function DeviceCharacteristicsSubPage({ deviceCharacteristics }: DeviceCharacteristicsProps) {
    return (
        <div className={c.characteristics__container}>
            <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus nulla id dolor porttitor, nec mollis augue rutrum. Phasellus convallis lectus vitae diam cursus, sit amet fermentum sem posuere. Nam ac nunc congue, porta sapien sit amet, placerat est. Praesent risus erat, ultricies non tempor eu, tempor non urna. Integer nec tortor nec dui semper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus blandit mauris. Curabitur mollis sem at nunc semper scelerisque. Nam convallis pellentesque arcu quis volutpat. Aliquam erat volutpat. Mauris quis ex arcu. In vehicula ullamcorper posuere. Fusce ipsum libero, accumsan non enim ut, rutrum consectetur elit. Etiam fermentum lorem libero, a tempus urna posuere sit amet.

                Etiam luctus in lectus eget semper. Fusce eget sapien arcu. Aliquam a eros arcu. Praesent ultrices vel tellus ut semper. Ut tincidunt libero ligula, pulvinar tristique ante egestas consectetur. Etiam nisl nulla, aliquet in risus nec, porta luctus libero. Curabitur condimentum a metus ut porttitor. Sed at odio aliquam, condimentum lorem eget, convallis velit. Pellentesque quis fermentum tortor. Curabitur volutpat auctor dignissim.

                Aliquam aliquet nisl sit amet lorem semper tincidunt. Sed in sollicitudin augue. Donec facilisis et odio et fringilla. Suspendisse et nunc ut sem imperdiet tincidunt. Sed laoreet diam dui, quis gravida justo auctor egestas. Sed id urna sit amet nulla convallis imperdiet tristique nec arcu. Maecenas convallis tempor risus vel posuere. Praesent rutrum porttitor iaculis.

                Mauris elementum, nisi eleifend volutpat malesuada, velit metus elementum massa, sollicitudin laoreet urna ipsum nec mi. Morbi feugiat magna eu nisl imperdiet, quis fermentum arcu tempus. Phasellus lacus leo, feugiat in sodales vitae, pharetra sed odio. Aliquam erat volutpat. Aliquam tristique finibus dictum. Pellentesque luctus, orci id molestie scelerisque, nulla lectus ornare nisi, in ornare erat justo sit amet urna. Suspendisse ullamcorper, risus quis tincidunt venenatis, urna justo cursus nibh, eget interdum tellus diam id ipsum. Phasellus suscipit ornare nulla, non hendrerit quam pharetra non. Aliquam at erat pretium, hendrerit augue vel, feugiat quam. Integer sodales magna lectus. Vivamus ut molestie dolor.

                Suspendisse vulputate eros vel magna laoreet tempor venenatis at ex. Donec maximus eros vel mauris iaculis, at eleifend lorem scelerisque. Aliquam erat volutpat. Nam nec nibh in eros tempus mattis id eget augue. Etiam eu lorem neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla varius feugiat molestie. Curabitur non suscipit dui, quis condimentum odio.
            </h2>
        </div>
    )
}
