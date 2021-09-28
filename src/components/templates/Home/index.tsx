import { HeroSlider, HeroSliderImageModel } from '@/components/home'
import { NewsletterSignup } from '@/components/newsletter'
import { ProductsCardsGroup } from '@/components/products'

import { ProductsCardsGroupModel } from '@/models'
import { Container } from './styles'

export type HomeTemplateProps = {
  productsGroups: ProductsCardsGroupModel[]
  slides: HeroSliderImageModel[]
}

export function HomeTemplate({ productsGroups, slides }: HomeTemplateProps) {
  return (
    <Container>
      <HeroSlider images={slides} />
      {productsGroups?.map((productGroup) => (
        <ProductsCardsGroup key={productGroup.id} productGroup={productGroup} />
      ))}
      <NewsletterSignup />
    </Container>
  )
}
