## libertynow-stats
Primarily, this project is designed for monitoring and visualization, providing dynamic dashboards of RMA system statistics using Grafana Open Source. Since multiple data sources can be used, this project is not limited to just RMA system statistics but can also be utilized for various other data sources. It integrates data from multiple sources, including databases, APIs, logs e.t.c to generate interactive dashboards for report analysis.


## Customisation  Grafana
In this project, the customisation applies to the user interface (UI) part of Grafana. Since there are no built-in settings that offer dynamic features for changing branding elements, libertynow-stats is a customisation of Grafana based on Liberty Now’s colour scheme, logo, etc., which serve as key visual elements of the company's identity. In this customisation, only the front-end is modified, while the back-end remains unchanged.

![Grafana Logo (Light)](docs/logo-horizontal.png#gh-light-mode-only)
![Grafana Logo (Dark)](docs/logo-horizontal-dark.png#gh-dark-mode-only)

The open-source platform for monitoring and observability

[![License](https://img.shields.io/github/license/grafana/grafana)](LICENSE)
[![Drone](https://drone.grafana.net/api/badges/grafana/grafana/status.svg)](https://drone.grafana.net/grafana/grafana)
[![Go Report Card](https://goreportcard.com/badge/github.com/grafana/grafana)](https://goreportcard.com/report/github.com/grafana/grafana)

Grafana allows you to query, visualize, alert on and understand your metrics no matter where they are stored. Create, explore, and share dashboards with your team and foster a data-driven culture:

- **Visualizations:** Fast and flexible client side graphs with a multitude of options. Panel plugins offer many different ways to visualize metrics and logs.
- **Dynamic Dashboards:** Create dynamic & reusable dashboards with template variables that appear as dropdowns at the top of the dashboard.
- **Explore Metrics:** Explore your data through ad-hoc queries and dynamic drilldown. Split view and compare different time ranges, queries and data sources side by side.
- **Explore Logs:** Experience the magic of switching from metrics to logs with preserved label filters. Quickly search through all your logs or streaming them live.
- **Alerting:** Visually define alert rules for your most important metrics. Grafana will continuously evaluate and send notifications to systems like Slack, PagerDuty, VictorOps, OpsGenie.
- **Mixed Data Sources:** Mix different data sources in the same graph! You can specify a data source on a per-query basis. This works for even custom datasources.

## Get started

- [Get Grafana](https://grafana.com/get)
- [Installation guides](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)

Unsure if Grafana is for you? Watch Grafana in action on [play.grafana.org](https://play.grafana.org/)!

## Documentation

The Grafana documentation is available at [grafana.com/docs](https://grafana.com/docs/).

## Contributing

If you're interested in contributing to the Grafana project:

- Start by reading the [Contributing guide](https://github.com/grafana/grafana/blob/HEAD/CONTRIBUTING.md).
- Learn how to set up your local environment, in our [Developer guide](https://github.com/grafana/grafana/blob/HEAD/contribute/developer-guide.md).
- Explore our [beginner-friendly issues](https://github.com/grafana/grafana/issues?q=is%3Aopen+is%3Aissue+label%3A%22beginner+friendly%22).
- Look through our [style guide and Storybook](https://developers.grafana.com/ui/latest/index.html).

## Get involved

- Follow [@grafana on X (formerly Twitter)](https://x.com/grafana/).
- Read and subscribe to the [Grafana blog](https://grafana.com/blog/).
- If you have a specific question, check out our [discussion forums](https://community.grafana.com/).
- For general discussions, join us on the [official Slack](https://slack.grafana.com) team.

This project is tested with [BrowserStack](https://www.browserstack.com/).

## License

Grafana is distributed under [AGPL-3.0-only](LICENSE). For Apache-2.0 exceptions, see [LICENSING.md](https://github.com/grafana/grafana/blob/HEAD/LICENSING.md).
