import { CostExplorerClient, GetCostAndUsageCommand } from "@aws-sdk/client-cost-explorer";
import dotenv from "dotenv";

dotenv.config();

const client = new CostExplorerClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const command = new GetCostAndUsageCommand({
  TimePeriod: { Start: "2025-01-01", End: "2025-03-02" },
  Granularity: "MONTHLY",
  Metrics: ["UnblendedCost"],
});

client.send(command)
  .then((data) => console.log("Cost Data:", JSON.stringify(data, null, 2)))
  .catch((err) => console.error("Error:", err));
