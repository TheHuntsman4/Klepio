import React from 'react';

const results = [
  {
    title: 'Acute Ginigivitis',
    description:
      'Acute gingivitis is a common form of gingivitis, which is inflammation of the gums. It is caused by a buildup of plaque on the teeth due to poor oral hygiene. Symptoms include swollen, reddened gums that may bleed easily when brushing or flossing. Treatment involves improving oral hygiene through brushing, flossing, and professional cleanings. If left untreated, gingivitis can progress to more severe periodontitis. Acute gingivitis is reversible with proper oral care',
    image: 'https://www.peaceperio.com/wp-content/uploads/2019/11/periodontal-disease-diagram.jpg',
  },
  {
    title: 'Acute Ginigivitis',
    description:
      'Acute gingivitis is a common form of gingivitis, which is inflammation of the gums. It is caused by a buildup of plaque on the teeth due to poor oral hygiene. Symptoms include swollen, reddened gums that may bleed easily when brushing or flossing. Treatment involves improving oral hygiene through brushing, flossing, and professional cleanings. If left untreated, gingivitis can progress to more severe periodontitis. Acute gingivitis is reversible with proper oral care',
    image: 'https://www.peaceperio.com/wp-content/uploads/2019/11/periodontal-disease-diagram.jpg',
  },
  {
    title: "Acute Irreversible Pulpitis",
    description: "Acute irreversible pulpitis is inflammation of the dental pulp that is sudden in onset and very painful. The dental pulp is the soft tissue inside each tooth containing nerves and blood vessels. Causes include extensive decay, trauma, or a cracked tooth that allows bacteria to infect the pulp. Symptoms are intense throbbing pain that lingers even after stimulus removal. It may radiate to other areas like the jaw or neck. Treatment is a root canal to remove the infected pulp and prevent further infection. Left untreated, the inflammation can spread leading to a dental abscess.",
    image: "https://www.peaceperio.com/wp-content/uploads/2019/11/periodontal-disease-diagram.jpg",
  },
  {
    title: "Acute Irreversible Pulpitis",
    description: "Acute irreversible pulpitis is inflammation of the dental pulp that is sudden in onset and very painful. The dental pulp is the soft tissue inside each tooth containing nerves and blood vessels. Causes include extensive decay, trauma, or a cracked tooth that allows bacteria to infect the pulp. Symptoms are intense throbbing pain that lingers even after stimulus removal. It may radiate to other areas like the jaw or neck. Treatment is a root canal to remove the infected pulp and prevent further infection. Left untreated, the inflammation can spread leading to a dental abscess.",
    image: "https://www.peaceperio.com/wp-content/uploads/2019/11/periodontal-disease-diagram.jpg",
  },  {
    title: "Acute Irreversible Pulpitis with acute Gingivitis",
    description: "inflammation affecting both the gums and the dental pulp. The gums exhibit the swelling, redness and bleeding of acute gingivitis. The dental pulp shows symptoms of irreversible pulpitis like spontaneous and lingering pain. The combination indicates an advanced stage of gum disease and tooth decay allowing bacteria and inflammation to spread. Treatment requires professional dental cleaning for the gingivitis plus a root canal for the infected pulp. Prompt treatment is important to prevent further dental abscesses, tooth loss, and spreading infection. Maintaining diligent oral hygiene and regular dental care can prevent these acute dental conditions.",
    image: "",
  },  {
    title: "Acute Irreversible Pulpitis with extra oral swelling",
    description: "Acute irreversible pulpitis with extra oral swelling indicates the inflammation and infection has spread beyond the tooth and dental pulp. Swelling of the cheek, lips, or face indicates a dental abscess is forming as pus builds up in the jaw and nearby tissues. Severe, throbbing pain may also radiate to other areas. Treatment requires urgent dental care including antibiotics, drainage of the abscess, and root canal therapy or tooth extraction to remove the source of infection.",
    image: "",
  },  {
    title: "Acute Reversible Pulpitis",
    description: "Acute reversible pulpitis is inflammation of the dental pulp that comes on quickly but that can resolve and heal if the cause is treated. It is often due to moderate decay, a cracked filling, or other trauma that exposes the pulp. Symptoms include sharp pain when eating or drinking something hot, cold, sweet or acidic that lingers briefly after the stimulus is removed. Treatment involves removing the cause by treating the decayed tooth or defective filling. The pulp remains vital so root canal is not needed.",
    image: "",
  },  {
    title: "Acute Reversible Pulpitis with food impaction",
    description: "caused temporary inflammation in the dental pulp. Symptoms include pain and sensitivity to hot or cold liquids or foods specifically in the area of the trapped food debris. Once the food particle is removed and the area is cleaned, the symptoms typically resolve indicating the pulpitis is reversible. Proper flossing prevents food from becoming impacted.",
    image: "",
  },  {
    title: "Acute Reversible Pulpitis with swelling",
    description: "This condition shows inflammation of the reversible pulpitis extending slightly beyond the tooth roots. There may be minor swelling and discomfort of the gums around the affected tooth. The pulp remains vital and healthy unless the swelling spreads further. Treatment focuses on the original cause of the pulpitis, such as a cracked filling or decay. The swelling should resolve with this treatment as long as the pulpitis has not become irreversible.",
    image: "",
  },  {
    title: "Acute Reversible Pulpitis with food impaction",
    description: "Food impaction with acute reversible pulpitis means food trapped between teeth has caused temporary inflammation in the dental pulp. Symptoms include pain and sensitivity to hot or cold liquids or foods specifically in the area of the trapped food debris. Once the food particle is removed and the area is cleaned, the symptoms typically resolve indicating the pulpitis is reversible. Proper flossing prevents food from becoming impacted.",
    image: "",
  },  {
    title: "",
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },  {
    title: ,
    description: ,
    image: ,
  },
  {
    title: ,
    description: ,
    image: ,
  },
];

const ResultDecoder = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      {results.map((result, key) => (
        <div key={key} className='bg-white text-black'>
          {result.description}
          <img src={result.image} alt='image' />
        </div>
      ))}
    </div>
  );
};

export default ResultDecoder;
