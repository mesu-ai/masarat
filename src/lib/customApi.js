// import fs from 'fs'
// import { join } from 'path'
// import matter from 'gray-matter'

// export function getDataSlugs(path = '') {
//   const pathDirectory = join(process.cwd(), path);
//   return fs.readdirSync(pathDirectory);
// }

// export function getDataBySlug(slug, fields = [], path = '') {
//   const pathDirectory = join(process.cwd(), path);

//   const realSlug = slug.replace(/\.md$/, '');
//   const fullPath = join(pathDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content } = matter(fileContents);

//   const items = {};

//   // Ensure only the minimal needed data is exposed
//   fields.forEach((field) => {
//     if (field === 'slug') {
//       items[field] = realSlug;
//     }
//     if (field === 'content') {
//       items[field] = content;
//     }

//     if (typeof data[field] !== 'undefined') {
//       items[field] = data[field];
//     }
//   });

//   return items;
// }

// export function getAllData(fields = [], path = '') {
//   const slugs = getDataSlugs(path);
//   const datas = slugs
//     .map((slug) => getDataBySlug(slug, fields, path))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
//   return datas;
// }