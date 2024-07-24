'use client'
import GlobalApi from '@/service/GlobalApi'; // Adjust the import according to your file structure
import { useEffect,useState } from 'react';

const DashboardSlug = ({ params }) => {
    const {id} = params;
    const [space,mySpace] = useState([]);
    const fetchSpace = async () => {
      try {
        const data = await GlobalApi.getSpaceById(id);
        setMySpaces(data.data);
      } catch (error) {
        console.error("Error fetching Spaces:", error);
      }
    };
    useEffect(() => {
      fetchSpace();
    }, []);
  return (
    <div>
      {space.header}
      {space.spaceName}
      {space._id}
    </div>
  );
};

// This function is called at build time
// export async function getStaticProps({ params }) {
//   const { id } = params;

//   try {
//     const response = await GlobalApi.getSpace();
//     return { props: { space: response.data } };
//   } catch (error) {
//     console.error('Error fetching space:', error);
//     return { props: { space: null } };
//   }
// }

// // This function is called at build time to determine the paths to pre-render
// export async function getStaticPaths() {
//   // Fetch all possible slugs (or paths) from your API
//   const response = await GlobalApi.getAllSpaces();
//   const spaces = response.data;

//   // Map the slugs to paths
//   const paths = spaces.map(space => ({
//     params: { slug: space._id }, // Change `_id` to the appropriate field
//   }));

//   return {
//     paths,
//     fallback: 'blocking', // 'blocking' will render pages on-demand if not pre-built
//   };
// }

export default DashboardSlug;
