import linkProvider from './linkProvider';

test('when request three links, return three links.', () => {
  // when
  const links = linkProvider.getRandomLinks(3);

  // then
  expect(links.length).toBe(3);
});

test('when requesting more links than present, return all available links', () => {
  const links = linkProvider.getRandomLinks(1000);

  const visitedTitles = [];
  links.forEach((link) => {
    expect(visitedTitles.includes(link.title)).toBe(false);
    visitedTitles.push(link.title);
  });
});
