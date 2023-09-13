import { Title } from "./Title"
import { services } from "../data"
import { ServiceArticle } from "./serviceArticle"

export const Services = () => {
  return (
    <section className="section services" id="services">
        <Title title="our" subTitle="services"/>
        <div className="section-center services-center">
            {services.map((service)=>{
                return (
                    <ServiceArticle {...service}/>
                )
            })}
        </div>
    </section>
  )
}
