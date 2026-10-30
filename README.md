# Marin King Tide Outlook

A single static page (`index.html`) that shows a 14- or 30-day flood outlook for four flood-prone Marin streets:
Golden Hind Passage (Mariner Cove), Point San Pedro Rd at the Marin Yacht Club, Riviera Circle, and Lucky Drive.

## How it works
- On every page load, the browser fetches NOAA tide data for the San Francisco gauge (9414290). There's no server or scheduled job.
- **Anomaly** = measured minus predicted water level within an hour of the last two high tides (the Kelvin wave plus weather). It's carried forward unchanged.
- **Forecast** = NOAA's predicted daily high + anomaly, compared to each location's flood thresholds (feet MLLW on the SF gauge scale).
- **Kelvin wave watch** = 21-day daily-mean anomaly at San Diego, Port San Luis, Monterey and San Francisco.

## Editing thresholds
Edit the `LOCATIONS` block at the top of the `<script>` in `index.html`. Each location has `minor`, `moderate` and `major` levels and a short note for each.

Current calibration sources: a 1 m USGS lidar flood model with SFEI Bay Shore Inventory barriers, resident photos (Jan 1–3 and Oct 27–29, 2026), and WET app (marinflood.com) flood lines.

## Limits
Storm surge, wind and rain are not included. This is a community project, not an official warning.

## Street lookup (`streets.json`)
246 low-lying streets in Corte Madera, Larkspur, Greenbrae and east San Rafael. Each has minor / moderate / major flood lines in feet MLLW on the SF gauge scale.
- Source: flood-connectivity model on 2018 USGS 3DEP 1 m lidar, with SFEI Bay Shore Inventory barriers burned in and openings/tide gates treated as closed, at 5 cm water-level steps. Minor = first ~15 m of street wet; moderate = 40% wet; major = 40% under 6+ inches.
- `kind`: `calibrated` (resident reports/WET), `model` (±0.5 ft), `basin` (Lucky Drive pump-drained low area; uses Lucky's calibrated lines), `protected` (below ordinary high tides, dry only because of levees/pumps; shown as a watch at 8.1 ft, the level that flooded protected areas on Jan 2–3, 2026).
