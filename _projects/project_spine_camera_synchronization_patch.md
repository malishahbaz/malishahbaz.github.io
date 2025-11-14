---
layout: page
title: "SPINE Camera Synchronization: Multi-View Event Display Sync"
description: A lightweight JavaScript patch for synchronizing camera motion between reconstructed and truth 3D scenes in SPINE/Plotly visualizations
img: assets/img/project_spine_camera_sync/spine_sync_cover.png
importance: 3
category: Work
related_publications: false
---

## The Problem: Unsynchronized Visualization

When analyzing neutrino detector data with [SPINE](https://github.com/DeepLearnPhysics/spine) , you need to compare two representations of the same event side-by-side:
- **Reconstructed particles**: what the detector and its algorithms measure
- **Truth particles**: what actually happened in simulation

SPINE generates interactive Plotly 3D scenes for both. But the cameras don't sync — rotate one view and the other stays put. For hundreds of events in your analysis, this friction adds up.

---

## How It Works

A single `sync_camera.js` file (~50 lines) listens to Plotly's layout update events. When you move the camera in one scene, it mirrors that change to all other scenes.

The approach:
- Listens for camera changes on any scene
- Extracts the camera data from the event
- Applies it to all other scenes
- Uses a flag to prevent infinite loops

No modifications to SPINE. No dependencies beyond Plotly (already in use).

Here's the core mechanism:

{% raw %}
```javascript
const graph = document.querySelector('.plotly-graph-div');
const scenes = ['scene', 'scene2'];
let isSyncing = false;

graph.on('plotly_relayout', (eventdata) => {
  if (isSyncing) return;
  
  // Find which scene's camera changed
  let camScene = null;
  let camData = null;
  for (const sceneName of scenes) {
    const key = sceneName + '.camera';
    if (eventdata.hasOwnProperty(key)) {
      camScene = sceneName;
      camData = eventdata[key];
      break;
    }
  }
  
  if (!camScene) return;
  isSyncing = true;
  
  // Mirror camera to all other scenes
  scenes.forEach(sceneName => {
    if (sceneName !== camScene) {
      let update = {};
      update[sceneName + '.camera'] = camData;
      Plotly.relayout(graph, update).catch(() => {}).then(() => {
        isSyncing = false;
      });
    }
  });
});

console.log("Camera synchronization enabled.");
```
{% endraw %}

---

## Integration Methods

**Option 1: Manual HTML Integration**

Place `sync_camera.js` in the same directory as your SPINE-generated HTML file, then add this line before the closing `</body>` tag:

{% raw %}
```html
<script src="sync_camera.js"></script>
```
{% endraw %}

**Option 2: Automated Notebook Integration**

Use the provided Jupyter notebook to automatically inject the script after generating a SPINE visualization:

{% raw %}
```python
def add_camera_sync_to_html(html_file_path):
    js_sync_code = '''
    <script type="text/javascript">
      const graph = document.querySelector('.plotly-graph-div');
      const scenes = ['scene', 'scene2'];
      let isSyncing = false;
      graph.on('plotly_relayout', (eventdata) => {
        if (isSyncing) return;
        let camScene = null;
        let camData = null;
        for (const sceneName of scenes) {
          const key = sceneName + '.camera';
          if (eventdata.hasOwnProperty(key)) {
            camScene = sceneName;
            camData = eventdata[key];
            break;
          }
        }
        if (!camScene) return;
        isSyncing = true;
        scenes.forEach(sceneName => {
          if (sceneName !== camScene) {
            let update = {};
            update[sceneName + '.camera'] = camData;
            Plotly.relayout(graph, update).catch(() => {}).then(() => {
              isSyncing = false;
            });
          }
        });
      });
      console.log("Camera synchronization enabled.");
    </script>
    '''
    
    with open(html_file_path, 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    new_html_content = html_content.replace('</body>', js_sync_code + '\n</body>')
    
    with open(html_file_path, 'w', encoding='utf-8') as f:
        f.write(new_html_content)

# Usage after SPINE visualization
visualize_and_sync(entry_number=28, reco_interaction_id=0)
add_camera_sync_to_html('MR6_0000492_entry_28_reco_0_truth_0.html')
```
{% endraw %}

Both approaches take seconds and require no changes to your analysis pipeline.


---

## Workflow Integration

The accompanying Jupyter notebook shows complete integration with DUNE's simulation:

{% raw %}
```python
from spine.vis.out import Drawer
import plotly.io as pio

def visualize_and_sync(entry_number, reco_interaction_id, truth_interaction_id=None):
    # Load SPINE data
    data = driver.process(entry=entry_number)
    
    # Filter to specific interaction
    reco_particles = [p for p in data['reco_particles'] 
                      if p.interaction_id == reco_interaction_id]
    truth_particles = [p for p in data['truth_particles'] 
                       if p.interaction_id == truth_interaction_id]
    
    # Create visualization
    drawer = Drawer(data, draw_mode='both', detector='2x2', split_scene=True)
    fig = drawer.get(
        obj_type='particles',
        attr='pid',
        draw_end_points=True,
        draw_vertices=True,
        synchronize=False,
        titles=['Reconstructed Particles', 'Truth Particles']
    )
    
    fig.update_layout(height=800, width=1000)
    pio.write_html(fig, 'event_display.html', full_html=True)
    add_camera_sync_to_html('event_display.html')
```
{% endraw %}

---

## Design Approach

This is a user-level extension that doesn't modify SPINE. It:
- Works alongside the framework
- Can be added or removed without changing analysis code
- Stays transparent and readable
- Scales to any number of 3D scenes

The implementation respects SPINE's architecture while solving a real workflow problem.

---

## Impact

Examining hundreds of events for systematic uncertainties or edge cases is faster when you don't have to manually align two views. The synced camera reduces cognitive load and saves time across a full analysis.

Early comparisons of reco vs. truth multiplicity distributions, vertex positions, and particle kinematics become immediate visual checks rather than tedious manual alignment exercises.

---

## Next Steps

Similar event handlers could synchronize hover interactions, shared annotations, or other cross-scene features. The architecture supports easy extension for other visualization needs.

**Repository**: [SPINE-Camera-Synchronization-Patch](https://github.com/your-username/spine-camera-sync)  
**Framework**: [SPINE - Deep Learning Physics Event Display](https://github.com/DeepLearnPhysics/spine)  
🔬 **Use Case**: DUNE ND-LAr 2×2 Demonstrator at Fermilab

**Files**:
- `sync_camera.js` — Core synchronization script
- `print_and_display_single_event.ipynb` — Integration example with MiniRun6.1 data
- `MR6p1_0000492_entry_28_reco_0_truth_0.html` — Live demo
