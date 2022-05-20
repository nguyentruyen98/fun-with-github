import { RepoSearchTextMatchFragment } from "../data/search-repo.github.gql.generated";

const getOptionTokens = (
  textMatches?: (RepoSearchTextMatchFragment | null | undefined)[] | null
) => {
  const match = textMatches?.find((match) => match?.property === "name");

  if (!match) {
    return [];
  }

  const { highlights, fragment } = match;

  return highlights.reduce<{ text: string; isHighlighted?: boolean }[]>(
    (result, { beginIndice, endIndice }, index, array) => {
      const hightlighted = {
        text: fragment.substring(beginIndice, endIndice),
        isHighlighted: true,
      };

      if (index === 0 && beginIndice > 0) {
        return [{ text: fragment.substring(0, beginIndice) }, hightlighted];
      }

      if (array[index - 1] && array[index - 1].endIndice < beginIndice) {
        result.push({
          text: fragment.substring(array[index - 1].endIndice, beginIndice),
        });
      }

      result.push(hightlighted);

      if (index === array.length - 1 && endIndice < fragment.length) {
        result.push({ text: fragment.substring(endIndice) });
      }

      return result;
    },
    []
  );
};

export default getOptionTokens;
