// Deconstructing props by using {}
// Otherwise we use only word 'props' as parameter and 
// we can access its fields that are sending like object
export default function CoreConcept({ image, title, description }) {
    return <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
}