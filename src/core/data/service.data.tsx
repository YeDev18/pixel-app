import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faAd, faBullhorn, faChartLine, faSitemap, faDesktop, faSearch, faMailBulk } from '@fortawesome/free-solid-svg-icons';


const servicedata = [
  {
    id: 1,
    name: "Web Development",
    icon: <FontAwesomeIcon icon={faDesktop} />,
  },
  {
    id: 2,
    name: "Sales & Marketing Audit",
    icon: <FontAwesomeIcon icon={faChartLine} />,
  },
  {
    id: 3,
    name: "Marketing Consulting",
    icon: <FontAwesomeIcon icon={faBullhorn} />,
  },
  {
    id: 4,
    
    name: "Brand Design & Strategy",
    icon: <FontAwesomeIcon icon={faPalette} />,
  },
  {
    id: 5,
    name: "Email Marketing",
    icon: <FontAwesomeIcon icon={faMailBulk} />,
  },
  {
    id: 6,
    name: "Sales Departments from Scratch",
    icon: <FontAwesomeIcon icon={faSitemap} />,
    
  },
  {
    id: 7,
    name: "Google Ads",
    icon: <FontAwesomeIcon icon={faAd} />,
  },
  {
    id: 8,
    name: "Social Media Marketing",
    icon: <FontAwesomeIcon icon={faBullhorn} />,
  },
  {
    id: 9,
    name: "SEO",
    icon: <FontAwesomeIcon icon={faSearch} />,
  },
];

export default servicedata;
