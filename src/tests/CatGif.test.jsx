import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import CatGif from "../component/CatGif";
import { getGif } from "./CatGifApis";
import getFirstThreeWords from "../utils/getFirstThreeWords";

test("renders without crashing", () => {
  render(<CatGif />);
});

test("return the first 3 words", () => {
  expect(getFirstThreeWords("The cats are smart and clean")).toBe(
    "The cats are"
  );
});

test("api get gif", async () => {
  const mockGifData = {
    data: [
      {
        id: "abc123",
        title: "Funny cats",
        images: {
          original: {
            url: "cat.gif",
          },
        },
      },
    ],
  };

  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => mockGifData,
  });

  const result = await getGif("funny cats are");

  expect(result).toBeDefined();
  expect(result.data).toHaveLength(1);
  expect(result.data[0].images.original.url).toBe("cat.gif");
});
