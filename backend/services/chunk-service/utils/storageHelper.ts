import env from "../../../enviroment/env";
import { getFSStoragePath } from "../../../utils/getFSStoragePath";
import fs from "fs";
import path from "path";

type GenericParmasType = {
  filePath?: string;
  Key?: string;
  Bucket?: string;
};

export const createGenericParams = ({ filePath, Key }: GenericParmasType) => {
  // TODO: Remove file split after migration
  if (env.dbType === "fs") {
    if (filePath && fs.existsSync(filePath)) {
      //const filePathSplit = filePath!.split("\\");
      const fileName= path.basename(filePath!);
      //const fileName = filePathSplit[filePathSplit.length - 1];
      return {
        filePath: getFSStoragePath() + fileName,
      };
    } else {
      return {
        filePath: getFSStoragePath() + Key!,
      };
    }
  } else {
    return {
      Key,
    };
  }
};
